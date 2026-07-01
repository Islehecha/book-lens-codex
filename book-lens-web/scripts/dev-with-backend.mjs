import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const webDir = resolve(here, "..");
const backendDir = resolve(webDir, "..", "book-lens-backend");
const frontendPort = process.env.PORT ?? "3002";
const backendPort = process.env.BOOK_LENS_BACKEND_PORT ?? "8767";
const backendBase = process.env.BOOK_LENS_BACKEND ?? `http://localhost:${backendPort}`;
const backendHealth = `${backendBase}/api/books`;
const nextBin = resolve(webDir, "node_modules", ".bin", "next");
const venvPython = resolve(backendDir, ".venv", "bin", "python3");
const pythonBin = existsSync(venvPython) ? venvPython : "python3";

let backendProcess = null;
let frontendProcess = null;
let shuttingDown = false;

async function backendIsAlive() {
  try {
    const res = await fetch(backendHealth, { signal: AbortSignal.timeout(1000) });
    return res.ok;
  } catch {
    return false;
  }
}

function spawnBackend() {
  const child = spawn(pythonBin, ["server.py"], {
    cwd: backendDir,
    env: { ...process.env, PORT: backendPort },
    stdio: "inherit",
  });

  backendProcess = child;
  child.on("exit", (code, signal) => {
    if (backendProcess === child) backendProcess = null;
    if (shuttingDown) return;
    console.error(
      `[book-lens] backend exited (${signal ?? code ?? "unknown"}); restarting in 2s...`,
    );
    setTimeout(() => {
      if (!shuttingDown) spawnBackend();
    }, 2000);
  });
}

function spawnFrontend() {
  frontendProcess = spawn(nextBin, ["dev", "--port", frontendPort], {
    cwd: webDir,
    env: {
      ...process.env,
      BOOK_LENS_BACKEND: backendBase,
      NEXT_PUBLIC_BACKEND_URL: backendBase,
    },
    stdio: "inherit",
  });

  frontendProcess.on("exit", (code, signal) => {
    shutdown(signal ?? code ?? 0);
  });
}

function shutdown(reason = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  if (frontendProcess && !frontendProcess.killed) frontendProcess.kill();
  if (backendProcess && !backendProcess.killed) backendProcess.kill();
  if (typeof reason === "number") process.exit(reason);
  process.exit(0);
}

for (const sig of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(sig, () => shutdown(sig));
}

console.log(`[book-lens] backend: ${backendBase}`);
if (await backendIsAlive()) {
  console.log("[book-lens] backend already running; using existing process.");
} else {
  console.log("[book-lens] starting backend behind the frontend...");
  spawnBackend();
}

console.log(`[book-lens] frontend: http://localhost:${frontendPort}`);
spawnFrontend();
