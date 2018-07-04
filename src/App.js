import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import Toggle from './ToggleRPC'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle>
          {/* Anonymous func that renders React children */}
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </Fragment>
          )}
        </Toggle>
        {/* <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <nav>nav item</nav>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        /> */}
      </div>
    )
  }
}

export default App
