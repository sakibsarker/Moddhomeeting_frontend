import React, { useState } from 'react'
import { connect } from 'react-redux'
import JoinRoomInput from './JoinRoomInput'

const JoinRoomContent = (props) => {

    const {isRoomHost} =props;
    
    const [roomIdValue,setRoomIdValue] =useState('')
    const [nameValue,setNameValue] =useState('')

  return( <>
  <JoinRoomInput
  roomIdValue={roomIdValue}
  setRoomIdValue={setRoomIdValue}
  nameValue={nameValue}
  setNameValue={setNameValue}
  isRoomHost={isRoomHost}
  />
  </>
  )
}

const mapStoreStateProps=(state)=>{
    return{
        ...state,
    }
}

export default connect(mapStoreStateProps)(JoinRoomContent);