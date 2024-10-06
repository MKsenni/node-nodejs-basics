import { unlink } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = join(__dirname, '/files/fileToRemove.txt');

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