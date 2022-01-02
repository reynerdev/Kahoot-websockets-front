import React from 'react'
import styled from 'styled-components'
import { io } from "socket.io-client";
import Modal from './Modal';
// import useSocket from '../../customHooks/useSocket'

const GAMEPIN = '2342342'


const WaitingRoom = () => {
  // esperar 
  const [enteredName, setEnteredName] = React.useState(false);
  const [userData, setUserData] = React.useState({})
  const [connectedUsers, setConnectedUsers] = React.useState([])
  const [roomName, setRoomName] = React.useState(null)

  // stablished our websocket connection con el servidor
  const socket = React.useMemo(()=>io(":3030"),[]);


  React.useEffect(() => {

    // guard el id de room para futuro uso y retornamos los usuarios
    socket.emit('create-new-room', {}, (data) => {
      setRoomName(data['game-pin'])
      setConnectedUsers(data.users)
      console.log(data)
    })


  }, [socket])

  const handleOnSubmit = (e) => {
    console.log('handleOnSubmit')
    e.preventDefault()

    // check whehter exite o no el nombre ingresado
    const isUserExist = connectedUsers.find((element) => {
      return element.name === e.target.value
    })

    if (isUserExist) {
      alert("Nombre de usuario ya existe")
      return;
    } else {
      setConnectedUsers([...connectedUsers, { name: e.target.value }])
    }

  }

  if (!enteredName) {
    console.log('returnModal')
    return (
      <Modal>
        <form onSubmit={handleOnSubmit}>
          <label className='font-bold text-base text-lg' htmlFor="enterName" style={{ marginBottom: '1rem' }} >
            Nombre
          </label><br />
          <input className='mt-4 focus:border-black' type='text' id="enterName" />
          <div className='block'>
            <input className=" cursor-pointer block w-full rounded-md text-white bg-base/80 mt-4 border-2 border-base/50 p-2 hover:bg-base" type='submit' value='Ingresar' />
          </div>
        </form>

      </Modal >)
  }


  return (
    <GridContainer >
      <div className='code-section'>
        <Code>
          <div class='title' >Game Pin</div>
          <div className="gamepin">
            {GAMEPIN}
          </div>
        </Code>
      </div>
      <div className='users-section'>
        Usuarios Conectados
      </div>
    </GridContainer>
  )
}

export default WaitingRoom

const GridContainer = styled.div`

  display: grid;
  width: 100vw;
  grid-template-columns: 1fr ;
  grid-template-rows: 1fr 5fr;
  
  .code-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .users-section {
    background-color: rgba(93, 37, 180)
}

`

const Code = styled.div`
    display: flex;
    padding: 24px ;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 4%;

  .gamepin {
    font-size: 3rem;
    font-weight: bold;
  }


  .title {
  width: 100%;
  display: flex;
  font-weight: bold;
  justify-content: start;
  }

`



