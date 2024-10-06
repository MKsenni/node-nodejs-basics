import { readdir } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const filePath = join(__dirname, '/files');

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