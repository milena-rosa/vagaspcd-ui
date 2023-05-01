import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray100',
  border: '1px solid $gray100',
  borderRadius: '$md',
  padding: '$6',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
