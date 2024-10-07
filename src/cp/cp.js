import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childFork = fork(filePath, args, { silent: true });
  process.stdin.pipe(childFork.stdin);
  childFork.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['yes', 'no', 'maybe']);
