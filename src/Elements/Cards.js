import styled from 'styled-components'
import { elevation, transition, colors } from 'Utilities'

export const ModalCard = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${colors.black};
  ${elevation[3]};
  ${transition({
    property: 'box-shadow',
    ease: 'ease-in'
  })}
  &:hover {
   ${elevation[4]}
  }
`
