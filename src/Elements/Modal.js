import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'

import { Portal, absolute } from 'Utilities'
import { ModalCard as Card } from './Cards'
import Icon from './Icon'

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <Portal>
        <Transition
          native
          config={{
            tension: 280,
            friction: 60
          }}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    ...styles,
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    )
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  onClick={toggle}
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    )
                  }}
                />
              </ModalWrapper>
            ))}
        </Transition>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnimCard = Card.withComponent(animated.div)

const ModalCard = AnimCard.extend`
  position: relative;
  min-width: 300px;
  z-index: 10;
  margin-bottom: 100px;
`
const CloseButton = styled.div`
  ${absolute({ y: 'top', x: 'right' })} border: none;
  background: transparent;
  padding: 10px;
`
const Background = styled(animated.div)`
  ${absolute({})} width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`
