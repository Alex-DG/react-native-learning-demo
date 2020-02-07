import React from 'react'
import { Alert } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import TodoList from '../../components/TodoList'

class Todo extends React.Component {
  inputRef = null

  state = {
    text: '',
    todos: [],
  }

  /**
   * This function Add or Remove a todo
   * @param todo - string
   */
  onUpdateList = (todo: string) => {
    const { todos } = this.state
    this.setState({ text: '' })
    // setText('') // Reset input value

    if (!todos.find(t => t === todo)) {
      // Add
      this.addTodo(todo)
    } else {
      // Remove
      this.removeTodo(todo)
    }
  }

  addTodo = (todo: string) => {
    const { todos } = this.state
    this.setState({
      todos: [...todos, todo],
    }) //same as `todos.push(todo)`
  }

  /**
   * This function Remove a todo
   * @param todo - string - todo to remove
   */
  removeTodo = (todo: string) => {
    const { todos } = this.state
    this.setState({ todos: todos.filter(t => t !== todo) })

    // return Alert.alert(
    //   'Remove',
    //   `Do you really want to remove "${todo}"`,
    //   [
    //     {
    //       text: 'Yes',
    //       onPress: () =>
    //         this.setState({ todos: todos.filter(t => t !== todo) }),
    //     },
    //     {
    //       text: 'No',
    //       onPress: () => console.log('Cancel Pressed'),
    //     },
    //   ],
    //   { cancelable: false },
    // )
  }

  render() {
    const { text, todos } = this.state

    return (
      <ScreenContainer>
        <Input
          label="TODO"
          value={text}
          placeholder="Enter a todo"
          onChangeText={value => this.setState({ text: value })}
        />

        <Button title="Add" onPress={() => this.onUpdateList(text)} />

        <TodoList data={todos} onRemove={this.onUpdateList} />
      </ScreenContainer>
    )
  }
}

// const Todo = () => {
//   const [text, setText] = useState('')
//   const [todos, setTodos] = useState<string[]>([])

//   /**
//    * This function Add or Remove a todo
//    * @param todo - string
//    */
//   const onUpdateList = (todo: string) => {
//     setText('') // Reset input value

//     if (!todos.find(t => t === todo)) {
//       // Add
//       setTodos([...todos, todo]) //same as `todos.push(todo)`
//     } else {
//       // Remove
//       removeTodo(todo)
//     }
//   }

//   /**
//    * This function Remove a todo
//    * @param todo - string - todo to remove
//    */
//   const removeTodo = (todo: string) =>
//     Alert.alert(
//       'Remove',
//       `Do you really want to remove "${todo}"`,
//       [
//         {
//           text: 'Yes',
//           onPress: () => setTodos(todos.filter(t => t !== todo)),
//         },
//         {
//           text: 'No',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//       ],
//       { cancelable: false },
//     )

//   return (
//     <ScreenContainer>
//       <Input
//         label="TODO"
//         value={text}
//         placeholder="Enter a todo"
//         onChangeText={value => setText(value)}
//         button={{ title: 'Add', onPress: onUpdateList }}
//       />
//       <TodoList data={todos} onRemove={onUpdateList} />
//     </ScreenContainer>
//   )
// }

export default Todo
