import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="app--header">
          <h1 className="logo">Gousto</h1>
        </header>

        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    )
  }
}

export default App
