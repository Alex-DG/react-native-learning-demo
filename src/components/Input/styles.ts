import styled from 'styled-components/native'
import { Text, TextInput, View } from 'react-native'

export const InputContainer = styled(View)`
  margin-top: 20px;
  flex-direction: column;
`
export const Label = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
`

export const InputStyled = styled(TextInput)`
  font-size: 16px;
  color: black;
  flex-grow: 1;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: black;
`
