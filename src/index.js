import React from 'react'
import { render } from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Home from './components/Home'
import './styles.css'

const httpLink = new HttpLink({ uri: 'http://35.229.25.3/graphiql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client} >
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
