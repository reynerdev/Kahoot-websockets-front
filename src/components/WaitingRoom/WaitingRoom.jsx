import React from 'react'
import styled from 'styled-components'
import { io } from "socket.io-client";
import Modal from './Modal';
import UserIcon from './UserIcon'
// import useSocket from '../../customHooks/useSocket'

const GAMEPIN = '2342342'


const WaitingRoom = () => {
  // esperar 
  const [enteredName, setEnteredName] = React.useState(false);
  const [userData, setUserData] = React.useState({})
  const [connectedUsers, setConnectedUsers] = React.useState([])
  const [gamePin, setGamePin] = React.useState(null)
  const [socket] = React.useState(() => io(":3030"))
  const [online, setOnline] = React.useState(false)

  console.log("Render Waiting Room")

  React.useEffect(() => {

    setOnline(true);

    // guard el id de room para futuro uso y retornamos los usuarios
    socket.emit('create-new-room', {}, (data) => {
      setGamePin(data['game-pin'])
      setConnectedUsers(data.users)
      console.log(data)
    })

    socket.on('updateUsers', (data) => {
      console.log('updateUsers', data)
      setConnectedUsers(data.users)
    })

    return () => {
      console.log('useEffectCleanUp')
      socket.on('disconnect', () => {
        setOnline(false)
      })
    }
  }, [socket])

  const handleOnSubmit = (e) => {
    console.log('handleOnSubmit', e.target[0].value)
    e.preventDefault()

    // check whehter exite o no el nombre ingresado
    const isUserExist = connectedUsers.find((element) => {
      return element.userName === e.target.value
    })

    console.log("isUserExist", isUserExist, e.target.value)
    if (isUserExist) {
      alert("Nombre de usuario ya existe")
      return;
    } else {
      socket.emit('addUser', { user: e.target[0].value, gamePin: gamePin })
      setEnteredName(true)
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
          <input name="name" className='mt-4 focus:border-black' type='text' id="enterName" />
          <div className='block'>
            <input name="createButton" className=" cursor-pointer block w-full rounded-md text-white bg-base/80 mt-4 border-2 border-base/50 p-2 hover:bg-base" type='submit' value='Ingresar' />
          </div>
        </form>

      </Modal >)
  }

  return (
    <GridContainer >
      <div className='code-section'>
        <Code>
          <div className='title' >GamePin</div>
          <div className="gamepin">
            {gamePin}
          </div>
        </Code>
      </div>
      <div className='users-section'>
        <div className='title'>
          <span>
            Usuarios conectados:
          </span>
        </div>
        <div className='list-users'>
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 1, 12, 3, 3, 3, 32, 32, 32].map((element, index) => <UserIcon index={index} />)}

        </div>
        {/* {connectedUsers.map(element => <p>{element.userName}</p>)} */}
      </div>
    </GridContainer>
  )
}

export default WaitingRoom

const GridContainer = styled.div`

  display: grid;
  width: 100vw;
height: 100vh;
  grid-template-columns: 1fr ;
  grid-template-rows: 1fr 5fr;
  
  .code-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.users-section {
  display: flex;
  flex-direction: column;
  background-color: rgba(93, 37, 180);
  align-items: center;
  gap: 2rem;
  .title{
    padding:2.5rem 1.5rem;
    width:100%;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    span{
      padding: 0.5rem 2rem;
      background-color: white;
      border-radius: 12px;
    }

  }
}
  .list-users {
  /* border: 2px solid pink; */
  /* height:100%; */
  /* min-height: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(8rem,8rem));
  gap:3rem;
  align-content:start;
  justify-content: center;
  /* justify-items: center; */
  /* align-items:center; */
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
    max-width: 100%;

  .gamepin {
  width: 10rem;
    font-size: 3rem;
    font-weight: bold;
  display: flex;
  justify-content: center;
  
  }


  .title {
  width: 100%;
  display: flex;
  font-weight: bold;
  justify-content: start;
  font-size: 2rem;
  }

`



