import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  alignItems: 'center',
  backgroundColor: '$gray100',
  border: '2px solid $gray100',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  padding: '$3 $4',

  // '&:has(input:focus)': {
  // borderColor: '$ignite300',
  // },

  '&:focus-within': {
    borderColor: '$primary',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const Icon = styled('div', {
  alignItems: 'center',
  display: 'flex',
  color: '$gray400',
  marginRight: '$2',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 0,
  color: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
