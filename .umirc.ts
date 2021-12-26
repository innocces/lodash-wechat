import { defineConfig } from 'dumi';

export default defineConfig({
  title: ' ',
  favicon: 'https://www.lodashjs.com/img/favicon.ico',
  logo: 'https://www.lodashjs.com/img/lodash.png',
  outputPath: 'docs-dist',
  antd: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
