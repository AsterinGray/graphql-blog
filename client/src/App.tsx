import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './Router'

const App = () => (
      <BrowserRouter>
          <ApolloProvider client={client} >
              <Router />
          </ApolloProvider>
      </BrowserRouter>
)

export default App
