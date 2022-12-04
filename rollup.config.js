import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: {
      button: 'src/components/Button/index.ts'
    },
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
    input: {
      button: 'src/components/Button/types.d.ts'
    },
    output: [{ dir: 'dist/esm', format: 'esm' }],
    plugins: [dts()]
  }
]
