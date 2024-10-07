import { cpus } from 'node:os';
import {isMainThread, Worker} from "node:worker_threads";

const countCpus = cpus().length;
const performCalculations = async () => {
  const results = new Array(countCpus).fill(null);
  let completedWorkers = 0;

  for (let i = 0; i < countCpus; i += 1) {
    if (isMainThread) {
      const workerData = 10 + i;
      const worker = new Worker('./worker.js', { workerData });
      worker.on('message', (result) => {
        results[i] = { status: 'resolved', data: result };
      })

      worker.on('error', () => {
        results[i] = { status: 'error', data: null }
      })

      worker.on('exit', () => {
        completedWorkers += 1;
        if (completedWorkers === countCpus) {
          console.log(results);
        }
      })
    }
  }
};

await performCalculations();