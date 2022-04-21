import { promises as fs } from 'fs';
import { resolve } from 'path';

await fs.rm('docs', { recursive: true }).catch(() => {});
await fs.cp(
  resolve(process.argv[2]),
  resolve('docs'),
  { recursive: true }
);
