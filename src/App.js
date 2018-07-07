import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import { Toggle } from 'Utilities'
import { Modal } from 'Elements'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Toggle>
          {/* Anonymous func that renders React children */}
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>What's up this is a modal. Pretty sweet!</h1>
              </Modal>
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
