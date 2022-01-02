import logo from './logo.svg';
import React from 'react'
import './App.css';
import MainLayout from './layouts/MainLayout';
import MainPage from './components/MainPage/MainPage';
import WaitingRoom from './components/WaitingRoom/WaitingRoom';
import {PROCESSTYPE} from  './utils/constants'
import useProcess from './customHooks/useProcess';


function App() {

  // const [process, setProcess] = React.useState(PROCESSTYPE['Main'])

  const {component} = useProcess()

  return (
    <MainLayout className="w-screen h-screen bg-base flex justify-center">
      {component}
    </MainLayout>
  );
}

export default App;
