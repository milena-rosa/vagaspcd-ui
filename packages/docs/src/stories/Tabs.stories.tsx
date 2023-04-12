import { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Heading,
  Tabs as TabsComponent,
  TabsProps,
  Text,
} from '@vagaspcd-ui/react'

export default {
  title: 'Surfaces/Tabs',
  component: TabsComponent,
  args: {
    defaultValue: 'tab1',
    tabsList: [
      {
        id: '1',
        value: 'tab1',
        label: 'Tab 1',
        content: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            modi sint repellat natus nobis. Laborum eaque iusto, sunt vero
            eligendi odio voluptate cum. Neque impedit cumque dolorum voluptas
            necessitatibus? Dolores.
          </Text>
        ),
      },
      {
        id: '2',
        value: 'tab2',
        label: 'Tab 2',
        content: (
          <Box>
            <Heading>Lorem ipsum dolor sit</Heading>
          </Box>
        ),
      },
    ],
  },
  argTypes: {},
} as Meta<TabsProps>

export const Tabs: StoryObj<TabsProps> = {}
