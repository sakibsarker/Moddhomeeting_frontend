import React, { useEffect } from 'react'
import './JoinRoom.css'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import { setIsRoomHost } from '../../store/action'
import JoinRoomTitle from './JoinRoomTitle'
import JoinRoomContent from './JoinRoomContent'


const JoinRoom = (props) => {
  const {setIsRoomHostAction,isRoomHost}=props;

  const search=useLocation().search;

  useEffect(()=>{

    const isRoomHost=new URLSearchParams(search).get('host');
    if(isRoomHost){
      setIsRoomHostAction(true)
    }

  },[]);


  return (
    <div className='join_room_page_container'>
      <div className='join_room_page_panel'>
        <JoinRoomTitle isRoomHost={isRoomHost}/>
        <JoinRoomContent/>
      </div>
      
    </div>
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