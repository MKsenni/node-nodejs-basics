import { appendFile, access } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const create = async () => {
  const filePath = path.join(__dirname, '/files/file.txt');
  access(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        appendFile(filePath, 'I am fresh and young', (err) => {
          if (err) throw err;
          console.log('file.txt created and "I am fresh and young" was appended to the file!');
        });
      }
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();