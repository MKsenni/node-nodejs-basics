import { readdir } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const list = async () => {
  const filePath = path.join(__dirname, '/files');

  readdir(filePath, { withFileTypes: true }, (err, files) => {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    }
    const arrFiles = files.map((file) => {
      if (file.isFile()) {
        return file.name;
      } else {
        throw new Error(`${file.name} is not file`);
      }
    })
    console.log(arrFiles);
  })
};

await list();