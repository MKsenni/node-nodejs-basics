import { rename as fsRename } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const rename = async () => {
  const filePath = path.join(__dirname, '/files/wrongFilename.txt');
  const newFileName = path.join(__dirname, '/files/properFilename.md');

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