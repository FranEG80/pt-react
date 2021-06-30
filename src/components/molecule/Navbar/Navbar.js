import React, { useContext } from 'react'
import Container from '../../atom/Container'
import Text from '../../atom/Text'
import Button from '../../atom/Button'
import { UserContext } from '../../../stores/UserStore'

const Navbar = () => {
  const { user: { username }, onLogout, } = useContext(UserContext)
  
  const handleLogout = () => onLogout()

  return (
    <Container
        className="flex"
        style={{ backgroundColor: '#009688', height:50, justifyContent: 'space-between', alignItems: 'center', padding: '5px 15px'}}
      >
        <Text>{username}</Text>
        <Button className="cancel" onPress={handleLogout}>Logout</Button>
      </Container>
  )
}

export default Navbar
