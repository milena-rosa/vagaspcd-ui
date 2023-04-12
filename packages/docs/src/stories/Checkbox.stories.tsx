import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Checkbox as CheckboxComponent,
  CheckboxProps,
  Text,
} from '@vagaspcd-ui/react'

export default {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text size="sm">Label</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Checkbox: StoryObj<CheckboxProps> = {}
