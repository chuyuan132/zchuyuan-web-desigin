import { format, resolve } from 'path';
import { rollup, Plugin, OutputOptions } from 'rollup';
import vuejsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import scss from 'rollup-plugin-scss';
import { pkgPath } from '../utils/path';
import { outPath } from '../utils/path';

const buildEntry = resolve(pkgPath, 'web-design-ui/index.ts');
const buildPlugin: Plugin[] = [
  vue(),
  vuejsx(),
  scss({
    fileName: 'index.css',
    outputStyle: 'compressed',
  }),
  nodeResolve({
    extensions: ['.ts'],
  }),
  commonjs(),
  esbuild(),
];

const writeConfig: OutputOptions[] = [
  {
    format: 'esm',
    dir: resolve(outPath, 'es'),
    preserveModules: true,
    entryFileNames: `[name].js`,
  },
  {
    format: 'cjs',
    dir: resolve(outPath, 'lib'),
    preserveModules: true,
    entryFileNames: `[name].js`,
    exports: 'named',
  },
];

/**
 * 打包webDesignUi子包
 */
export async function buildWebDesignUI(cb: (...args: any[]) => void) {
  const bundle = await rollup({
    input: buildEntry,
    plugins: buildPlugin,
    external: ['vue'],
  });
  await Promise.all(
    writeConfig.map((config) => {
      bundle.write(config);
    }),
  );
  cb && cb();
}
