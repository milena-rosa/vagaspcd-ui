import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '../../styles'

export const TabsContainer = styled(TabsPrimitive.Root, {})

export const TabsList = styled(TabsPrimitive.List, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
})

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  color: '$black',
  background: '$white',
  border: 'none',
  cursor: 'pointer',
  display: 'block',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  padding: '$2 $4',
  position: 'relative',

  '&[data-state="active"]': {
    background: '$primary20',
  },

  '&[data-state="active"]::after': {
    backgroundColor: '$gray800',
    borderRadius: '$px',
    bottom: '-2px',
    content: '',
    height: '2px',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
})

export const TabsContent = styled(TabsPrimitive.Content, {
  borderTop: '2px solid hsla(0, 0%, 44%, 0.15)',
  padding: '$4',
})
