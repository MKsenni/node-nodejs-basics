import { pipeline } from 'node:stream';
import zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  pipeline(
    createReadStream(filePath),
    zlib.createGunzip(),
    createWriteStream(join(__dirname, 'files', 'fileToCompress.txt')),
    (err) => {
      err ? process.exitCode = 1 : console.log('Decompressed');
    },
  );
};

await decompress();