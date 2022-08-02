module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@data': './src/data',
          '@infra': './src/infra',
          '@presentation': './src/presentation',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
