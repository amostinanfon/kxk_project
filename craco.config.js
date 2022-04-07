const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#fcae07', 
                          '@font-family': 'Roboto',
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};