import { useSocket } from '../../context/socket-context';
import React from 'react';
import { fadeOut } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import { PROCESSTYPE } from '../../utils/constants'
const fadeOutAnimation = keyframes`${fadeOut}`

const MainPage = ({ setProcess, enterCode, setEnterCode, error, setError }) => {


  const socket = useSocket()

  const handleOnClick = (e) => {

    //check wether the room exits
    socket.emit('checkRoomExistAndJoin', { gamePin: enterCode }, (data) => {
      // the respond of the data
      console.log("checkRoomExistAndJoin", data)
      if (data.isValid) {
        setEnterCode(enterCode);
        setProcess(PROCESSTYPE['EnterRoom'])

      } else {
        setError(true)
      }

    })

  }

  return (
    <div className="w-screen h-screen bg-base flex justify-center">
      <div className="grid grid-cols-1 w-96 content-center gap-8 ">
        <div className="flex justify-center flex-col">
          <img alt="logo" src={process.env.PUBLIC_URL + '/logo_.svg'} />
          <div className="flex justify-end  text-white font-bold text-xl">
            <a target="_blank" href="https://github.com/reynerdev" rel="noreferrer">
              By @reynerdev
            </a>
          </div>
        </div>
        <div className="bg-red grid grid-cols-1 gap-4 p-3   bg-white border-4 border-base rounded-lg">
          <button className="border-4 bg-black text-white p-3" onClick={() => setProcess("CreateRoom")}>Crear room</button>
        </div>
        <div className="bg-red grid grid-cols-1 gap-4 p-3  content-center bg-white border-4 border-base rounded-lg">
          <input className="border-4 p-2" placeholder="Ingrese codigo" value={enterCode} type="number" onChange={(e) => setEnterCode(e.target.value)} />
          <button className="bg-black text-white p-3 " onClick={handleOnClick}> Ingresar Codigo </button>
        </div>

      </div>
    </div>
  )
}

export default MainPage


