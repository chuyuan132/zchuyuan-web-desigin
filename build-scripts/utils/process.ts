import { rootPath } from './path';
import { spawn } from 'child_process';

/** 新开进程，执行npm命令 */
function run(command: string, rootProject: string = rootPath) {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    const app = spawn(cmd, args, {
      cwd: rootProject,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });

    app.on('close', (code) => {
      if (code === 0) {
        resolve(`Command: ${command}\n Execution  Successful`);
      } else {
        reject(new Error(`Command failed. \n Command: ${command} \n Code: ${code}`));
      }
    });
  });
}

export { run };
