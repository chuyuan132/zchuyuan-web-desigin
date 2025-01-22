import { outPath, pkgPath } from '../utils/path';
import { resolve } from 'path';
import { OutputOptions, rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

const entryInput = resolve(pkgPath, 'web-design-ui/index.ts');

const writeConfig: OutputOptions[] = [
  {
    format: 'esm',
    dir: resolve(outPath, 'es'),
    preserveModules: true,
    entryFileNames: `[name].d.ts`,
  },
  {
    format: 'cjs',
    dir: resolve(outPath, 'lib'),
    preserveModules: true,
    entryFileNames: `[name].d.ts`,
    exports: 'named',
  },
];
export async function buildType(cb: (...args: any[]) => void) {
  const bundle = await rollup({
    input: entryInput,
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      }),
    ],
  });
  await Promise.all(
    writeConfig.map((config) => {
      bundle.write(config);
    }),
  );
  cb && cb();
}
