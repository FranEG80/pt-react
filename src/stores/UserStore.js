import React, { useState } from "react";
import { login, logout, register } from "../services/users.service";

const INITIAL_USER_DATA = {
  username: '',
  isLogged: false,
  error: false
}

export const UserContext = React.createContext(INITIAL_USER_DATA);

const UserStore = ({ children }) => {
  const [username, setUsername] = useState(INITIAL_USER_DATA.username);
  const [isLogged, setLogged] = useState(INITIAL_USER_DATA.isLogged);
  const [error, setError] = useState(false)

  const handleLogin = ({email, password}) => {
    login({email, password})
      .then(data => {
        if (data.error) {
          return setError(data.message)
        }
        setError(false)
        setUsername(data.username)
        setLogged(true)
      })
  }

  const handleLogout = () => {
    logout()
      .then(status => {
        if (status.code !== 204) {
          let errorMsg = 'Logout is failed, try again'
          return setError(errorMsg)
        }
        setUsername(INITIAL_USER_DATA.username)
        setLogged(INITIAL_USER_DATA.isLogged)
      })
  }
  const handleRegister = ({username, password, email}) => {
    register({username, password, email})
      .then(data => {
        if (data.error) {
          return setError(data.message)
        }
        setError(false)
        setUsername(data.username)
        setLogged(true)
      })
  }

  const handleError = error => setError(error)

  return (
    <UserContext.Provider
      value={{ 
        user: { username, isLogged },
        error,
        onError: handleError,
        onLogin: handleLogin,
        onRegister: handleRegister,
        onLogout: handleLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
