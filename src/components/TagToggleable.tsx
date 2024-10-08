import React, { useState } from 'react'
import { Pressable, Text } from 'react-native'

type Props = {
  title: string
  checked?: boolean
  onChangeChecked?: (state: boolean) => void
}

export function TagToggleable({ checked = false, title }: Props) {
  const [isSelected, setIsSelected] = useState(checked)

  function handleSelectTagToggleable() {
    setIsSelected((prevState) => !prevState)
  }

  return (
    <Pressable
      className={`bg-transparent self-start border-solid border-2 border-gray-300 rounded-full py-0.5 px-1 ${
        isSelected && 'bg-blue-500 border-transparent'
      }`}
      onPress={handleSelectTagToggleable}
    >
      <Text
        className={`text-gray-300 rounded-full p-1.5 font-bold text-xs ${
          isSelected && 'text-white'
        }`}
      >
        {title}
      </Text>
    </Pressable>
  )
}
