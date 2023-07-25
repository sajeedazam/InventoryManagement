module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
  