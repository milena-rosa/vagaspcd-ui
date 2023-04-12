import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectRoot = styled(SelectPrimitive.Root, {})

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',

  alignItems: 'center',
  backgroundColor: '$white',
  border: '2px solid $primary',
  borderRadius: '$sm',
  color: '$gray900',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$medium',
  gap: '$2',
  height: 38,
  justifyContent: 'space-between',
  minWidth: 120,
  padding: '0 $4',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    boxShadow: `0 0 0 2px $colors$gray400`,
  },

  '&[data-placeholder]': {
    color: '$gray200',
  },

  '&[data-disabled]': {
    background: '$gray200',
  },
})

export const SelectValue = styled(SelectPrimitive.Value, {})
export const SelectPortal = styled(SelectPrimitive.Portal, {})
export const SelectGroup = styled(SelectPrimitive.Group, {})
export const SelectItemText = styled(SelectPrimitive.ItemText, {})

export const SelectIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$primary',
})

export const SelectContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const SelectViewport = styled(SelectPrimitive.Viewport, {
  padding: '$1',
})

export const StyledItem = styled(SelectPrimitive.Item, {
  alignItems: 'center',
  borderRadius: '$xs',
  color: '$primary',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$md',
  height: '$8',
  padding: '0 $6',
  position: 'relative',
  userSelect: 'none',

  '&[data-highlighted]': {
    backgroundColor: '$primary40',
    color: '$gray100',
    outline: 'none',
  },
})

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  left: '$1',
  position: 'absolute',
  width: '$3',
})
