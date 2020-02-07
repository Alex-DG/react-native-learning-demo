import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import { add, times, minus, div } from '../src/utils/maths'

import Math from '../src/screens/Math'

it('should render correctly', () => {
  renderer.create(<Math />)
})

it('addition should return 4', () => {
  const a = 2
  const b = 2

  expect(add(a, b)).toBe(4)
})

it('multiplication should return 20', () => {
  const a = 10
  const b = 2

  expect(times(a, b)).toBe(20)
})

it('division should return 5', () => {
  const a = 10
  const b = 2

  expect(div(a, b)).toBe(5)
})

it('substraction should return 10', () => {
  const a = 15
  const b = 5

  expect(minus(a, b)).toBe(10)
})
