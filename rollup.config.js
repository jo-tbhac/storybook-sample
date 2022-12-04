import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import glob from 'glob'
import path from 'node:path'

export default [
  {
    input: Object.fromEntries(
      glob.sync('src/components/**/index.ts').map((file) => {
        const key = path.relative('src/components', file.slice(0, file.length - path.extname(file).length))
        return [key, file]
      })
    ),
    output: [
      {
        dir: 'dist/esm',
        format: 'esm'
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      })
    ]
  },
  {
    input: Object.fromEntries(
      glob.sync('src/components/**/types.d.ts').map((file) => {
        const key = path.relative('src/components', file).replace(/types\.d\.ts$/, 'index')
        return [key, file]
      })
    ),
    output: [{ dir: 'dist/esm', format: 'esm' }],
    plugins: [dts()]
  }
]
