import { ComponentProps, ReactElement } from 'react'
import { TabsContainer, TabsContent, TabsList, TabsTrigger } from './styles'

export interface TabsProps extends ComponentProps<typeof TabsContainer> {
  tabsList: {
    id: string
    value: string
    label: string
    content: ReactElement
  }[]
}

export const Tabs = ({ tabsList, ...props }: TabsProps) => {
  return (
    <TabsContainer {...props}>
      <TabsList>
        {tabsList.map(({ label, value, id }, index) => (
          <TabsTrigger key={id || `${index}-${value}`} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsList.map(({ content, id, value }, index) => (
        <TabsContent key={id || `${index}-${value}`} value={value}>
          {content}
        </TabsContent>
      ))}
    </TabsContainer>
  )
}

Tabs.displayName = 'Tabs'
