module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/*'],
          '@components/atomic': ['./src/components/atomic'],
          '@components/integrated': ['./src/components/integrated'],
          '@components/templates': ['./src/components/templates'],
          '@theme': ['./src/theme'],
          '@types': ['./src/types'],
          '@context': ['./src/context'],
          '@screens': ['./src/screens'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
