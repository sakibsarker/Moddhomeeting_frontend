import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveRoomButton from './LeaveRoomButton'
import ScreenSharingButton from './ScreenSharingButton'

const VideoButtons = (props) => {
  return (
    <div className='video_buttons_container'>
    <MicButton/>
    <CameraButton/>
    <LeaveRoomButton/>
    <ScreenSharingButton/>
    </div>
  )
}

export default VideoButtons