import React, { useEffect } from 'react'
import '../RoomPage/RoomPage.css'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import VideoSection from './VideoSection/VideoSection'
import ChatSection from './ChatSection/ChatSection'
import RoomLabel from './RoomLabel'
import { connect } from 'react-redux';
import * as webRTCHandler from '../../utils/webRTCHandler'
import OverLay from './OverLay'

const RoomPage = ({roomId,identity,isRoomHost,showOverlay}) => {

  useEffect(()=>{
    webRTCHandler.getLocalPreviewAndInitRoomConnection(
      isRoomHost,
      identity,
      roomId,
    );

  },[])


  return (
    <div className='room_container'>
     <ParticipantsSection/>
     <VideoSection/>
     <ChatSection/>
     <RoomLabel roomId={roomId}/>
     { showOverlay && <OverLay/>}
    </div>
  )
}

const mapStoreStateProps=(state)=>{
  return{
    ...state,
    
  }
}

export default connect(mapStoreStateProps)(RoomPage);