import React from 'react'

const MainLayout = ({ children }) => {

  return (

    <div className="w-screen h-screen bg-base flex justify-center">
      {children}
    </div>

  )



}

export default MainLayout;
