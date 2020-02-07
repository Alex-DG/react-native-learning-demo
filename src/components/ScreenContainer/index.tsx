import * as React from 'react'
import {
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native'

import { styles } from './styles'

const ScreenContainer = ({ children }: any) => (
  <SafeAreaView style={styles.safeContainer}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.body}>{children}</View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  </SafeAreaView>
)

export default ScreenContainer
