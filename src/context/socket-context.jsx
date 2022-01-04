import React from 'react'
import { io } from "socket.io-client";

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {

  const socket = io(':3030')

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

const useSocket = () => {
  return React.useContext(SocketContext)
}

export { SocketProvider, useSocket }



