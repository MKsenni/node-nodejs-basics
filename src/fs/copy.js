import { copyFile, constants, mkdir, readdir, access } from 'node:fs';
import path from 'path';
const __dirname = import.meta.dirname;

const copy = async () => {
  const filesPath = path.join(__dirname, '/files');
  const filesCopyPath = path.join(__dirname, '/files_copy');

  access(filesPath, (err) => {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      mkdir(filesCopyPath, { recursive: true }, (err) => {
        if (err) {
          throw err;
        } else {
          readdir(filesPath, { withFileTypes: true }, (err, files) => {
            if (err) throw err;

            for (let file of files) {
              if (file.isFile()) {
                copyFile(`${filesPath}/${file.name}`, `${filesCopyPath}/${file.name}`, constants.COPYFILE_EXCL, (err) => {
                  if (err) {
                    if (err.code === 'EEXIST') {
                      throw new Error('FS operation failed')
                    } else {
                      throw err;
                    }
                  }
                });
              } else {
                throw new Error(`${file.name} is not file`);
              }
            }
          })
        }
      });
    }
  });
};

await copy();
