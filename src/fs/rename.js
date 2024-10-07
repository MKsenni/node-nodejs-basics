import { rename as fsRename } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const filePath = join(__dirname, '/files/wrongFilename.txt');
  const newFileName = join(__dirname, '/files/properFilename.md');

  fsRename(filePath, newFileName, (err) => {
    if (err) {
      if (err.code === 'ENOENT' || err.code === 'EEXIST') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    }
  })
};

await rename();