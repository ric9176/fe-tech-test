import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'

//As this is the top level component (root), we can use it to add routing and Providers

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CharacterList} />
      <Route path="/:id" component={CharacterDetail} />
    </Switch>
  </Router>
)

export default Root
