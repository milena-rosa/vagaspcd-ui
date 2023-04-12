import { ComponentProps } from 'react'
import {
  Flex,
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'

export interface RadioGroupProps extends ComponentProps<typeof RadioGroupRoot> {
  items: {
    id: string
    value: string
    label: string
  }[]
}

export function RadioGroup({ items, ...props }: RadioGroupProps) {
  return (
    <RadioGroupRoot {...props}>
      {items.map(({ id, value, label }) => (
        <Flex key={id}>
          <RadioGroupItem value={value} id={id}>
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor={id}>{label}</Label>
        </Flex>
      ))}
    </RadioGroupRoot>
  )
}
