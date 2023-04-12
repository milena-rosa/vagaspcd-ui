import { IconProps } from '@phosphor-icons/react'
import { ComponentProps, ElementRef, ReactElement, forwardRef } from 'react'
import { Icon, Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  icon?: ReactElement<IconProps>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, icon, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        {!!icon && <Icon>{icon}</Icon>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
