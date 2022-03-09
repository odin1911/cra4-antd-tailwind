const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        // {
        //   displayName: false,
        // },
      ],
    ],
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
