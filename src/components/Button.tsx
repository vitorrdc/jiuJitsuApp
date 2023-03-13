import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'primary' | 'success' | 'outline'
  size?: 'full' | 'mini'
}

export function Button({
  title,
  size = 'full',
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <NativeBaseButton
      {...(size === 'full' && { w: 'full' })}
      h={size === 'mini' ? 10 : 14}
      rounded="sm"
      backgroundColor={variant === 'primary' ? 'blue.500' : 'green.700'}
      {...rest}
    >
      <Text
        color="white"
        fontFamily="heading"
        fontSize={size === 'mini' ? 'xs' : 'sm'}
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
