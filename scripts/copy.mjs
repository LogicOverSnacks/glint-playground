import { promises as fs } from 'fs';
import { resolve } from 'path';

await fs.cp(
  resolve('glint/angular/dist'),
  resolve('docs'),
  { recursive: true }
);
