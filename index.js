/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

/**
 * AppRegistry is the JS entry point to running all React Native apps.
 * App root components should register themselves with AppRegistry.registerComponen
 */
AppRegistry.registerComponent(appName, () => App)
