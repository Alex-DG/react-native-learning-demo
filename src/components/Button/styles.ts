import styled, { css } from 'styled-components/native'
import { TouchableHighlight, View, Text } from 'react-native'

import { BLACK, WHITE, SKY_BLUE, GREY_3 } from '../../styles/colors'

const borderRadius = css`
  border-radius: 6px;
`

export const TouchableHighlightStyled = styled(TouchableHighlight)`
  ${borderRadius};
  margin: 10px 5px 0;
`

export const Container = styled(View)<{
  disabled?: boolean
  nobackground?: boolean
}>`
  ${({ nobackground, disabled }) =>
    nobackground && `border: 1px solid ${disabled ? GREY_3 : SKY_BLUE}`};

  background-color: ${({ disabled, nobackground }) =>
    disabled ? GREY_3 : nobackground ? WHITE : SKY_BLUE};

  ${borderRadius}

  height: 50px;

  justify-content: center;

  width: auto;
`

export const Title = styled(Text)<{
  disabled?: boolean
  nobackground?: boolean
}>`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  text-align: center;

  ${({ disabled }) => disabled && 'opacity: 0.3'}

  color: ${({ disabled, nobackground }) =>
    disabled ? BLACK : nobackground ? SKY_BLUE : WHITE};
`
