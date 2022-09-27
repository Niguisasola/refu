import React from 'react'
import Router from './application/Router'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  
  console.log('hola', clientId)
  return (
    <div className='App'>
      <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <Router/>
      </Auth0Provider>
    </div>
  )
}

export default App