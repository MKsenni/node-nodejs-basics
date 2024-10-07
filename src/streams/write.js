import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  process.stdout.write('Please, write some text. For exit press ctrl + c.\n');
  const writable = createWriteStream(filePath);

  process.stdin.pipe(writable);
};

await write();