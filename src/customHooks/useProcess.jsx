import React from 'react'
import MainPage from '../components/MainPage/MainPage';
import WaitingRoom from '../components/WaitingRoom/WaitingRoom';

import { PROCESSTYPE } from '../utils/constants'

const useProcess = () => {
  const [process, setProcess] = React.useState(PROCESSTYPE['Main'])
  let component;
  switch (process) {
    case 'Main':
      component = <MainPage setProcess={setProcess} />
      break;

    case 'CreateRoom':
      component = <WaitingRoom setProcess={setProcess} />
      break;

    default:
      component = <MainPage setProcess={setProcess} />
      break;
  }

  return { process, setProcess, component }
}

export default useProcess
