import { env } from 'node:process';

const parseEnv = () => {
  const prefix = 'RSS_';
  const envInConsole = Object.keys(env).filter((envKey) => envKey.includes(prefix)).map((key) => {
    return `${key}=${env[key]}`
  }).join('; ');
  console.log(envInConsole);
};

parseEnv();