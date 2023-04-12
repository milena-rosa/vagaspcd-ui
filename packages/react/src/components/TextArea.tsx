import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray100',
  border: '2px solid $gray100',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  minHeight: 80,
  padding: '$3 $4',
  resize: 'vertical',

  '&:focus': {
    borderColor: '$primary',
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
