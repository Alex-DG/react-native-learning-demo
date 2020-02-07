import 'react-native'
import React from 'react'
import Todo from '../src/screens/Todo'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { TextInput } from 'react-native'

const testRenderer = renderer.create(<Todo />)
const testRoot = testRenderer.root
const testInstance = testRenderer.getInstance()

it('should render correctly', () => {
  renderer.create(<Todo />)
})

it('should return initial state correctly', () => {
  const state = testRoot.findByType(Todo).instance.state
  expect(state).toMatchObject({ text: '', todos: [] })
})

it('should change input value', () => {
  const input = testRoot.findByType(TextInput)
  input.props.onChangeText('Learning JavaScript')

  const inputText = testRoot.instance.state.text

  expect(inputText).toBe('Learning JavaScript')
})

it('should add a todo', () => {
  testInstance.onUpdateList('Learning React-Native')
  const todos = testInstance.state.todos

  expect(todos.length).toBe(1)
  expect(todos[0]).toBe('Learning React-Native')
})

it('should remove an existing todo', () => {
  const todoAdded = testRoot.findByProps({ testID: 'Learning React-Native' })
  todoAdded.props.onPress()
  const todos = testRoot.instance.state.todos

  expect(todos.length).toBe(0)
})
