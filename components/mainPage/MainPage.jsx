import React from 'react';

const MainPage = () => {

  return (
    <div className="w-screen h-screen bg-base flex justify-center">
      <div className="grid grid-cols-1 w-96 content-center gap-8 ">
        <div className="flex justify-center flex-col">
          <img alt="logo" src={process.env.PUBLIC_URL + '/logo_.svg'} />

          <div className="flex justify-end  text-white font-bold text-xl">
            By @reynerdev
          </div>


        </div>
        <div className="bg-red grid grid-cols-1 gap-4 p-3   bg-white border-4 border-base rounded-lg">
          <button className="border-4 bg-black text-white p-3">Crear room</button>
        </div>
        <div className="bg-red grid grid-cols-1 gap-4 p-3  content-center bg-white border-4 border-base rounded-lg">
          <input className="border-4 p-2" placeholder="Ingrese codigo" type="number" />
          <button className="bg-black text-white p-3 "> Ingresar Condigo </button>

        </div>

      </div>
    </div>
  )
}

export default MainPage
