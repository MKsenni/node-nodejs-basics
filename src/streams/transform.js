import { Transform } from 'node:stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split('').reverse().join(''));
    }
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();