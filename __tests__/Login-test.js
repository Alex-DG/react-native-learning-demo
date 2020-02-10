import 'react-native'
import React from 'react'

import Login from '../src/screens/Login'

import { LoginValidations } from '../src/utils/login'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const { areFormFieldsValid, isEmailValid, isPasswordValid } = LoginValidations()

it('should render correctly', () => {
  renderer.create(<Login />)
})

///

it('should be a valid email', () => {
  expect(isEmailValid('alex@gearedapp.co.uk')).toBeTruthy()
})

/**
 * We want to be sure to handle failure as well
 */
it('should not be a valid email', () => {
  expect(isEmailValid('alexgearedapp.co.uk')).toBeFalsy()
})

///

it('should be a valid password', () => {
  expect(isPasswordValid('12345678')).toBeTruthy()
})
it('should not be a valid password', () => {
  expect(isPasswordValid('1234')).toBeFalsy()
})

////

it('should be valid fields', () => {
  expect(areFormFieldsValid('alex@gearedapp.co.uk', '12345678')).toBeTruthy()
})
it('should not be valid fields', () => {
  expect(areFormFieldsValid('alaredapp.co.uk', '12378')).toBeFalsy()
})
