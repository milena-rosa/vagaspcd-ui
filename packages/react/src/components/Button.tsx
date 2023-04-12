import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  alignItems: 'center',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  gap: '$2',
  justifyContent: 'center',
  minWidth: 120,
  padding: '0 $4',
  textAlign: 'center',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray400',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'opacity(80%)',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        border: '2px solid $primary',
        color: '$primary',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
