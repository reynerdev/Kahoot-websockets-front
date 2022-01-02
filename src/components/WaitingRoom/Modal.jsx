import React from 'react'
import styled from 'styled-components'

const Modal = ({ title, titleButton, children }) => {

  const [modalState, setModalState] = React.useState(false)

  return (
    <ModalContainer>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.3)
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${props => props.display ? props.display : 'flex'};
  justify-content: center;
  align-items: center;
  top:0;
  left:0;

`

const ModalContent = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: 3fr;
  background-color: white;
  max-width: 100%;
  border-radius: 10px;
  padding: 2rem;
  .titleModal {
  display: flex;
  justify-content: center
}




`
