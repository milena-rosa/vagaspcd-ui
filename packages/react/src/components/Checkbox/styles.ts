import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  alignItems: 'center',
  backgroundColor: '$gray100',
  border: '2px solid $gray100',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  height: '$6',
  justifyContent: 'center',
  lineHeight: 0,
  overflow: 'hidden',
  width: '$6',

  '&[data-state="checked"]': {
    backgroundColor: '$primary',
  },

  '&:focus': {
    borderColor: '$primary',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$gray100',
  height: '$4',
  width: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
