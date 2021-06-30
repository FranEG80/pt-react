import React from 'react'
import Text from '../../atom/Text/Text'

function Title({children, className, style}) {
  return (
    <Text className={className} type='h1' style={[{}, style]}>
      {children}
    </Text>
  )
}

export default Title
