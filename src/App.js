import React, { Component, Fragment } from 'react'
import { Transition } from 'react-spring'

import logo from './logo.svg'
import './App.css'
import { Toggle } from 'Utilities'
import { Modal, ModalCard as Card } from 'Elements'
import User from './User'
import UserProvider from './UserProvider'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />

          {/* <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <Transition
                    from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                    enter={{ opacity: 1, bg: '#524763', height: '200px' }}
                    leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section> */}

          {/* Render props uses anonymous func to render React children */}
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Show Modal</button>
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
      </UserProvider>
    )
  }
}

const Header = styles => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height
    }}
  >
    <h1>Show animation</h1>
    <h3>{styles.bg} </h3>
  </Card>
)

export default App
