import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readable = createReadStream(filePath).setEncoding('utf8');
  readable.pipe(process.stdout);
};

await read();