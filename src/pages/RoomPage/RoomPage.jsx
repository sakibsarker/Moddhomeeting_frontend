import React from 'react'
import '../RoomPage/RoomPage.css'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import VideoSection from './VideoSection/VideoSection'
import ChatSection from './ChatSection/ChatSection'
import RoomLabel from './RoomLabel'
import { connect } from 'react-redux';

const RoomPage = ({roomId}) => {
  return (
    <div className='room_container'>
     <ParticipantsSection/>
     <VideoSection/>
     <ChatSection/>
     <RoomLabel roomId={roomId}/>
    </div>
  )
}

const mapStoreStateProps=(state)=>{
  return{
    ...state,
    
  }
}

export default connect(mapStoreStateProps)(RoomPage);