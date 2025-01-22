import { run } from '../utils/process';
import { copyFile } from 'fs/promises';
/**
 * 清理包产物
 */
export function cleanDist() {
  return run('npm run clean');
}

/**
 * 复制文件
 */
export function copyMultFile(config: { from: string; to: string }[]) {
  const tasks = config.map(({ from, to }) => {
    copyFile(from, to);
  });
  return Promise.all(tasks);
}
