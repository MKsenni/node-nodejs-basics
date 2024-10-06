import { unlink } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const remove = async () => {
  const filePath = path.join(__dirname, '/files/fileToRemove.txt');

  unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    }
  })
};

await remove();