/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * Metro is a JavaScript bundler. It takes in an entry file and various options,
 * and gives you back a single JavaScript file that includes all your code and
 * its dependencies.
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
