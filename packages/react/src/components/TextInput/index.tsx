import { IconProps } from '@phosphor-icons/react'
import { ComponentProps, ReactElement } from 'react'
import { Icon, Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  icon?: ReactElement<IconProps>
}

export function TextInput({ prefix, icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {!!icon && <Icon>{icon}</Icon>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
