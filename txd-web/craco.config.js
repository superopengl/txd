const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          javascriptEnabled: true,
          lessOptions: {
            modifyVars: {
              '@primary-color': '#22075e',
              '@font-size-base': '16px',
              '@height-base': '40px',
              '@height-lg': '48px',
              '@height-sm': '32px',
              '@border-radius-base': '4px',
            },
            javascriptEnabled: true,
          }
        }
      },
    },
  ],
};