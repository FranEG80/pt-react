import React from 'react'
import Form from '../../atom/Form/Form'

function LoginForm({children}) {
  return (
    <Form>
      {children}
    </Form>
  )
}

export default LoginForm
