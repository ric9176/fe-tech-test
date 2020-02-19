import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterList from './components/CharacterList'

//As this is the top level component (root), we can use it to add routing and Providers

const Root = () => (
  <Router>
    <Route path="/" component={CharacterList} />
  </Router>
)

export default Root
