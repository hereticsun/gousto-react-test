import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app--header">
          <h1 className="logo"><Link to="/" className="title">Gousto</Link></h1>
        </header>

        <main>
          <Route exact path="/:categoryId?" component={Home} />
        </main>
      </div>
    )
  }
}

export default App
