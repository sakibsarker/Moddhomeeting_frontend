import React, { useEffect } from 'react'
import './JoinRoom.css'
import {useLocation} from 'react-router-dom'

const JoinRoom = () => {

  const search=useLocation().search;

  useEffect(()=>{

    const isRoomHost=new URLSearchParams(search);

  },[]);


  return (
    <div>JoinRoom</div>
  )
}

export default JoinRoom