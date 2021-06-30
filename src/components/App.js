import './App.css';
import React, { useContext } from 'react';
import { Route } from "wouter";
import UserStore, { UserContext } from '../stores/UserStore';
import Container from './atom/Container';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Text from './atom/Text';
import JobDetailScreen from './screens/JobDetailScreen';


function App() {
  return (
    <UserStore>
      <Container className='flex ai-center jc-center h100 column'>
        <AppWithContext/>
      </Container>
    </UserStore>
    
  );
}

const AppWithContext = () => {
  const {user, error} = useContext(UserContext);
  return(
    <>
      {error && <Text type='p' style={{fontWeight: 'bold', color: 'red'}}>{error}</Text>}
      { user.isLogged
        ? (
          <>
            <Route path='/job/:id'>
              {params => <JobDetailScreen id={params.id}/>}
            </Route>
            <Route path='/' component={HomeScreen}/>
          </>
          )
        : <LoginScreen/>
      }
    </>
  )
}

export default App;
