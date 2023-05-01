import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const UnorderedList = styled('ul', {
  display: 'grid',
  gridGap: '$4',
  marginLeft: '$8',
  padding: 0,

  variants: {
    color: {
      gray100: { color: '$gray100' },
      gray800: { color: '$gray800', background: 'lime' },
      black: { color: '$black' },
      primary: { color: '$primary' },
      white: { color: '$white' },
    },
  },

  defaultVariants: {
    color: 'gray100',
  },
})

export const ListItem = styled('li', {
  fontFamily: '$default',
  paddingLeft: '$2',

  '&::marker': {
    content: 'attr(data-icon)',
    fontSize: '$xl',
  },
})

export interface UnorderedListProps
  extends ComponentProps<typeof UnorderedList> {
  as?: ElementType
}

export interface ListItemProps extends ComponentProps<typeof ListItem> {
  as?: ElementType
}

UnorderedList.displayName = 'UnorderedList'
ListItem.displayName = 'ListItem'
