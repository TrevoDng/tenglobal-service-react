module.exports = function (api) {
    return {
      plugins: [
        ['macros'],
        [
          'module-resolver',
          {
            alias: {
              path: 'path-browserify',
            },
          },
        ],
      ],
    };
  };