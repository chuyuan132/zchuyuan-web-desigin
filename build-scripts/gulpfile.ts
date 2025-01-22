import { parallel, series } from 'gulp';
import { outPath, pkgPath } from './utils/path';
import { resolve } from 'path';
import { cleanDist, buildWebDesignUI, buildType, copyMultFile } from './tasks';

export default series(cleanDist, parallel(buildWebDesignUI, buildType), () =>
  copyMultFile([
    {
      from: resolve(pkgPath, 'web-design-ui/package.json'),
      to: resolve(outPath, `package.json`),
    },
    {
      from: resolve(pkgPath, 'web-design-ui/global.d.ts'),
      to: resolve(outPath, `global.d.ts`),
    },
    {
      from: resolve(pkgPath, 'web-design-ui/README.md'),
      to: resolve(outPath, `README.md`),
    },
  ]),
);
