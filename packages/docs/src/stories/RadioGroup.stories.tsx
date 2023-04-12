import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  RadioGroup as RadioGroupComponent,
  RadioGroupProps,
} from '@vagaspcd-ui/react'

export default {
  title: 'Form/RadioGroup',
  component: RadioGroupComponent,
  args: {
    defaultValue: 'item1',
    items: [
      { id: '1', label: 'Item 1', value: 'item1' },
      { id: '2', label: 'Item 2', value: 'item2' },
      { id: '3', label: 'Item 3', value: 'item3' },
    ],
  },
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<RadioGroupProps>

export const RadioGroup: StoryObj<RadioGroupProps> = {}
