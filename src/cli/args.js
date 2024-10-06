import { argv } from 'node:process';

const parseArgs = () => {
  const envArguments = argv.slice(2);
  const argsInConsole = envArguments.map((argument, idx) => {
    let value = envArguments[idx + 1];
    if (argument.startsWith('--') && value && !value.startsWith('--')) {
      const name = argument.replace('--', '');
      let value = envArguments[idx + 1];
      if (name && value) {
        return `${name} is ${value}`;
      }
    }
  }).filter((item) => item).join(', ');
  console.log(argsInConsole);
};

parseArgs();