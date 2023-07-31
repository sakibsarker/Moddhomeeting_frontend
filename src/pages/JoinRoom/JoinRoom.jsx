import React, { useEffect } from 'react'
import './JoinRoom.css'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import { setIsRoomHost } from '../../store/action'


const JoinRoom = () => {
  const {setIsRoomHostAction}=props;

  const search=useLocation().search;

  useEffect(()=>{

    const isRoomHost=new URLSearchParams(search).get('host');
    if(isRoomHost){
      setIsRoomHostAction(true)
    }

  },[]);


  return (
    <div>JoinRoom</div>
  )
}


const mapStoreStateProps=(state)=>{
  return{
    ...state
  }

}


const mapActionProps=(dispatch)=>{
  return{
    setIsRoomHostAction:(isRoomHost)=>dispatch(setIsRoomHost(isRoomHost))
  }

}

export default connect(mapStoreStateProps,mapActionProps)(JoinRoom);