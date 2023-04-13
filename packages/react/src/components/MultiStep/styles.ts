import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',
  fontSize: '$xs',
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  marginTop: '$1',
})

export const Step = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: '$px',
  height: '$1',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
