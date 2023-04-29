import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  external: [
    'react',
    'react-dom',
    'react-is', // add react-is as an external dependency
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
};
