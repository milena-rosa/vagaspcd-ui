import type { Meta, StoryObj } from '@storybook/react'
import {
  ListItem,
  UnorderedList as UnorderedListComponent,
  UnorderedListProps,
} from '@vagaspcd-ui/react'

export default {
  title: 'Typography/UnorderedList',
  component: UnorderedListComponent,
  args: {
    children: (
      <UnorderedListComponent>
        <ListItem>Texto</ListItem>
        <ListItem>Texto</ListItem>
        <ListItem>Texto</ListItem>
      </UnorderedListComponent>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<UnorderedListProps>

export const UnorderedList: StoryObj<UnorderedListProps> = {}
