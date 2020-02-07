import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

type IngredientsProps = {
  data: string[]
  onRemove: (item: string) => void
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    margin: 15,
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
  emtpyText: {
    alignSelf: 'center',
    fontSize: 16,
  },
  itemText: {
    margin: 10,
    fontSize: 20,
  },
})

const TodoList = ({ data = [], onRemove }: IngredientsProps) => {
  return (
    <View style={styles.container}>
      {!data.length ? (
        <Text style={styles.emtpyText}>Empty list</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}-${item}`}
          renderItem={({ item, index }) => (
            <Text
              testID={item}
              style={styles.itemText}
              onPress={() => onRemove(item)}>
              {index + 1} - {item}
            </Text>
          )}
        />
      )}
    </View>
  )
}

export default TodoList
