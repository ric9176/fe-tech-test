import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
  })
})

//As this is the top level component (root), we can use it to add routing and Providers

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route path="/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default Root
