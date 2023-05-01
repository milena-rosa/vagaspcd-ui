import type { Meta, StoryObj } from '@storybook/react'
import {
  ListItem,
  UnorderedList as UnorderedListComponent,
  UnorderedListProps,
} from '@vagaspcd-ui/react'

export default {
  title: 'Typography/UnorderedList',
  component: ListItem,
  args: {
    children: (
      <UnorderedListComponent>
        <ListItem data-icon="›">Texto</ListItem>
        <ListItem data-icon="🦄">Texto</ListItem>
        <ListItem data-icon="😎">Texto</ListItem>
      </UnorderedListComponent>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
    color: {
      options: ['primary', 'black', 'gray100', 'white', 'gray800'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<UnorderedListProps>

export const UnorderedList: StoryObj<UnorderedListProps> = {}

export const LightBackgroundUnorderedList: StoryObj<UnorderedListProps> = {
  args: {
    color: 'gray800',
  },
}
