import { appendFile, access } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, '/files/file.txt');
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