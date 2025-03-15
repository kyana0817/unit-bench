import fs from 'node:fs/promises';
import { run } from 'mitata';


const isTSFile = (file: string) => file.endsWith('.ts');
const isEntryFile = (file: string) => file === 'index.ts';

const files = (await fs.readdir('./src')).filter((file) => isTSFile(file) && !isEntryFile(file));
const isAll = process.argv.includes('all');

const imports = isAll ? files.map((file) => import(`./${file}`)) : process.argv.slice(2)
  .filter((file) => files.includes(file))
  .map((file) => import(`./${file}`));

await Promise.all(imports);
await run();
