import { resolve } from 'path';

export const rootPath = resolve(__dirname, '../../');
export const pkgPath = resolve(rootPath, 'packages');
export const outPath = resolve(rootPath, 'dist');
