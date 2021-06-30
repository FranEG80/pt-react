import React from 'react'
import Container from '../../atom/Container'
import Button from '../../atom/Button'
import Text from '../../atom/Text'

function SearchButton({className, style, onSearch}) {
  return (
    <Container className={`${className ?? ''} flex column`} style={style}>
      <Text>
        <Button 
        className='success'
        onPress={onSearch}
        >🔁</Button> Synchro Jobs
      </Text>
    </Container>
  )
}

export default SearchButton
