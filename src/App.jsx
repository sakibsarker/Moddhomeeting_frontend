import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import JoinRoom from './pages/JoinRoom/JoinRoom'
import RoomPage from './pages/RoomPage/RoomPage'
import IntroPage from './pages/IntoPage/IntroPage'
import { connectWithSocketIOServer } from './utils/wss'

const App = () => {

  useEffect(()=>{
    connectWithSocketIOServer();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/join-room' element={<JoinRoom/>}/>
        <Route path='/room' element={<RoomPage/>}/>
        <Route path='/' element={<IntroPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App