import React from 'react'
import './App.css';
import MainLayout from './layouts/MainLayout';
import useProcess from './customHooks/useProcess';
import { io } from "socket.io-client";
import { SocketProvider, useSocket } from './context/socket-context';


function App() {

  const { component } = useProcess()
  // const socket = useSocket()
  const [isRoomExits, setRoomExits] = React.useState(false)

  return (
    <SocketProvider>
      <MainLayout className="w-screen h-screen bg-base flex justify-center">
        {component}
      </MainLayout>
    </SocketProvider>
  );
}

export default App;
