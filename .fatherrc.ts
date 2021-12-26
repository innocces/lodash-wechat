export default {
  esm: {
    type: 'babel',
    file: 'lodash-wechat',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'lodash-wechat',
    lazy: true,
    minify: true,
  },
  umd: {
    name: 'lodash-wechat',
    file: 'lodash-wechat',
    minFile: true,
    sourcemap: true,
  },
  injectCSS: false, // 不注入css
  extractCSS: false, // 单独提取css
  disableTypeCheck: true,
};
