import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from '../api'
import AvailablePets from './pages/AvailablePets'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">PetWorld</h2>
        </header>
        <Switch>
          <Route path="/" component={AvailablePets} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
