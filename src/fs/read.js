import { readFile } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const read = async () => {
  const filePath = path.join(__dirname, '/files/fileToRead.txt');

  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    }
    console.log(data);
  })
};

await read();