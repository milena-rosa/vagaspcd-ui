import type { Meta, StoryObj } from '@storybook/react'
import { Select as SelectComponent, SelectProps } from '@vagaspcd-ui/react'

export default {
  title: 'Form/Select',
  component: SelectComponent,
  args: {
    placeholder: 'Selecione...',
    items: [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
      { value: 'item3', label: 'Item 3' },
      { value: 'item4', label: 'Item 4' },
    ],
  },
  // decorators: [
  //   (Story) => (
  //     <Box
  //       as="label"
  //       css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
  //     >
  //       {Story()}
  //     </Box>
  //   ),
  // ],
} as Meta<SelectProps>

export const Select: StoryObj<SelectProps> = {}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    defaultValue: 'item1',
    disabled: true,
  },
}
