module.exports = {
    //... existing config
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  };