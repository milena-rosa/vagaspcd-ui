import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const UnorderedList = styled('ul', {
  fontFamily: '$default',
  lineHeight: '$short',
  listStyleType: 'none',
  margin: '$1 0 $4',
  padding: 0,
})

export const ListItem = styled('li', {
  listStyle: 'none',
  paddingLeft: '$4',
  position: 'relative',

  '&::before': {
    border: '1px solid $black',
    borderWidth: '2px 2px 0 0',
    content: '',
    height: 5,
    left: 0,
    position: 'absolute',
    top: 8,
    transform: 'rotate(45deg)',
    width: 5,
  },

  variants: {
    color: {
      primary: { borderColor: '$primary' },
      black: { borderColor: '$black' },
    },
  },

  defaultVariants: {
    color: 'black',
  },
})

export interface UnorderedListProps
  extends ComponentProps<typeof UnorderedList> {
  as?: ElementType
}

UnorderedList.displayName = 'UnorderedList'
