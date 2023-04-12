import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { keyframes, styled } from '../../styles'

export const RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const RadioGroupItem = styled(RadioGroupPrimitive.Item, {
  all: 'unset',

  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '$full',
  cursor: 'pointer',
  display: 'flex',
  height: '$6',
  width: '$6',

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

export const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',

  '&::after': {
    backgroundColor: '$primary',
    borderRadius: '$full',
    content: '""',
    display: 'block',
    height: '$4',
    width: '$4',
  },

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
})

export const Flex = styled('div', {
  alignItems: 'center',
  display: 'flex',
})

export const Label = styled('label', {
  color: '$white',
  fontSize: '$md',
  fontFamily: '$default',
  paddingLeft: '$4',
})
