import React from 'react'
import ConButton from './ConButton'
import { useNavigate } from 'react-router-dom'
import './IntroPage.css'
const ConButtons = () => {

    const navigate=useNavigate();


    const pushToJoinRoomPage=()=>{
        navigate('/join-room');
    }

    const pushtoJoinRoomAsHost=()=>{
        navigate('/join-room?host=true');

    }


  return (
    <div className="connecting_buttons_container">
        <ConButton buttonText="Join a meeting" onClickHandler={pushToJoinRoomPage}/>
        <ConButton createRoomButton 
        buttonText="Host a meeting"
        onClickHandler={pushtoJoinRoomAsHost}/>
    </div>
  )
}

export default ConButtons