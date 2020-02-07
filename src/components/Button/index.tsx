import React from 'react'
import { ActivityIndicator, ButtonProps } from 'react-native'

import { TouchableHighlightStyled, Container, Title } from './styles'

export interface ButtonComponentProps extends ButtonProps {
  title: string
  onPress: (item?: any) => void
  loading?: boolean
  disabled?: boolean
  nobackground?: boolean
}

const Button = ({
  title,
  onPress,
  disabled,
  loading,
  nobackground,
}: ButtonComponentProps) => (
  <TouchableHighlightStyled onPress={onPress} disabled={loading || disabled}>
    <Container disabled={disabled} nobackground={nobackground}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Title disabled={disabled} nobackground={nobackground}>
          {title}
        </Title>
      )}
    </Container>
  </TouchableHighlightStyled>
)

export default Button
