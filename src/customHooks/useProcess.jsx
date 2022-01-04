import React from 'react'
import MainPage from '../components/MainPage/MainPage';
import WaitingRoom from '../components/WaitingRoom/WaitingRoom';

import { PROCESSTYPE } from '../utils/constants'

const useProcess = () => {
  const [process, setProcess] = React.useState(PROCESSTYPE['Main'])
  const [enterCode, setEnterCode] = React.useState('');

  let component;
  switch (process) {
    case 'Main':
      component = <MainPage setProcess={setProcess} enterCode={enterCode} setEnterCode={setEnterCode} />
      break;

    case 'CreateRoom':
      component = <WaitingRoom setProcess={setProcess} type={process} />
      break;

    case 'EnterRoom':
      component = <WaitingRoom setProcess={setProcess} type={process} codePin={enterCode} />
      break;

    default:
      component = <MainPage setProcess={setProcess} />
      break;
  }

  return { process, setProcess, component }
}

export default useProcess
