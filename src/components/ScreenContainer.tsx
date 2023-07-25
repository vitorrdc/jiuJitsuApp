import { IScrollViewProps, ScrollView } from 'native-base'
import { ReactNode } from 'react'

type Props = IScrollViewProps & {
  children: ReactNode
}

export function ScreenContainer({
  children,
  _contentContainerStyle,
  ...rest
}: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      backgroundColor="gray.900"
      _contentContainerStyle={{
        paddingBottom: 25,
        paddingX: 6,
        paddingTop: 6,
        ..._contentContainerStyle,
      }}
      {...rest}
    >
      {children}
    </ScrollView>
  )
}
