import React from 'react'

const useSocket = () => {

  const socket = React.useMemo(() => io(":3030"), []);

  React.useEffect(() => {

    // guard el id de room para futuro uso y retornamos los usuarios
    socket.emit('create-new-room', {}, (data) => {
      setRoomName(data['game-pin'])
      setConnectedUsers(data.users)
      console.log(data)
    })


  }, [socket])


}

export default useSocket
