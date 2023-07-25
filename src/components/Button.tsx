import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'

type Props = IButtonProps & {
  title: string
  variant?: 'primary' | 'success' | 'outline' | 'red'
  size?: 'full' | 'mini'
}

export function Button({
  title,
  size = 'full',
  variant = 'primary',
  ...rest
}: Props) {
  const backgroundColor = (): ColorType => {
    switch (variant) {
      case 'primary':
        return 'blue.500'
      case 'outline':
        return 'transparent'
      case 'red':
        return 'red.600'
      default:
        return 'green.600'
    }
  }
  return (
    <NativeBaseButton
      {...(size === 'full' && { w: 'full' })}
      h={size === 'mini' ? 10 : 14}
      rounded="sm"
      backgroundColor={backgroundColor()}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'gray.700' : 'white'}
        fontFamily="heading"
        fontSize={size === 'mini' ? 'xs' : 'sm'}
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
