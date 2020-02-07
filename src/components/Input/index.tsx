import React from 'react'
import { TextInputProps } from 'react-native'
import { InputStyled, Label, InputContainer } from './styles'

interface InputProps extends TextInputProps {
  label?: string
  value: string
  onChangeText: (text: string) => void
}

const Input = ({ label, value, onChangeText, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputStyled
        {...{
          value,
          onChangeText,
          ...props,
        }}
      />
    </InputContainer>
  )
}

export default Input
