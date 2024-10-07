import { Worker, workerData, parentPort, isMainThread } from 'node:worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const random = Math.floor(Math.random()* (40 - 1) + 1);


// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (isMainThread) {
    new Worker('./main.js', { workerData });
  } else {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
  }
};

sendResult();