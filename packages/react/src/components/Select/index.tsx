import { CaretDown, Check } from '@phosphor-icons/react'
import { ComponentProps, forwardRef } from 'react'
import {
  SelectContent,
  SelectIcon,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  StyledItem,
  StyledItemIndicator,
} from './styles'

type SelectItemProps = ComponentProps<typeof StyledItem>

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledItem {...props} ref={forwardedRef}>
      <SelectItemText>{children}</SelectItemText>
      <StyledItemIndicator>
        <Check />
      </StyledItemIndicator>
    </StyledItem>
  ),
)

SelectItem.displayName = 'SelectItem'

export type SelectProps = ComponentProps<typeof SelectRoot> &
  ComponentProps<typeof SelectValue> & {
    items: {
      value: string
      label: string
    }[]
  }

export function Select({ placeholder, items, ...props }: SelectProps) {
  return (
    <SelectRoot {...props}>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <CaretDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  )
}

Select.displayName = 'Select'
