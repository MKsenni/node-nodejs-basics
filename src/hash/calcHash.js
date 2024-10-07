import { createReadStream } from 'node:fs';
const {
  createHash,
} = await import('node:crypto');
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(filePath);
  input.on('readable', () => {
    const data = input.read();
    if (data) {
      console.log(hash.update(data).digest('hex'))
    }
  });
};

await calculateHash();