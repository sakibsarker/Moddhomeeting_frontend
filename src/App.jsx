import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import JoinRoom from './pages/JoinRoom/JoinRoom'
import RoomPage from './pages/RoomPage/RoomPage'
import IntroPage from './pages/IntoPage/IntroPage'
const App = () => {
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