const { defaults } = require('jest-config');

console.log(defaults.moduleFileExtensions);
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-navigation|@react-native-community|@react-navigation)',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};
