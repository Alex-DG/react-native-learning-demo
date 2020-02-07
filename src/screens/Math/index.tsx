import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'

import { add, minus, times, div } from '../../utils/maths'

const styles = StyleSheet.create({
  section: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  text: {
    fontSize: 20,
  },
  result: {
    fontSize: 20,
    color: 'red',
  },
})

const Math = () => {
  const a = 2
  const b = 2

  return (
    <ScreenContainer>
      <View style={styles.section}>
        <Text style={styles.text}>2 + 2 </Text>
        <Text style={styles.result}>= {add(a, b)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>2 x 2 </Text>
        <Text style={styles.result}>= {times(a, b)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>2 - 2 </Text>
        <Text style={styles.result}>= {minus(a, b)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>2 : 2 </Text>
        <Text style={styles.result}>= {div(a, b)}</Text>
      </View>
    </ScreenContainer>
  )
}

export default Math
