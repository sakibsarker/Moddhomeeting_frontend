import React, { useState } from 'react'
import SwitchImg from '../../../assets/switchToScreenSharing.svg'
import LocalScreenSharingPreview from './LocalScreenSharingPreview'
import * as webRTCHandler from '../../../utils/webRTCHandler'

const constrains={
  audio:false,
  video:true,
}

const ScreenSharingButton = () => {
    const [isScreenSharingActive,setIsScreenSharingActive] =useState(false)
    const [screenSharingStream,setScreenSharingStream] =useState(null)


    const handleScreenShareToggle=async()=>{
      if(!isScreenSharingActive){
        let stream=null;
        try {
          stream=await navigator.mediaDevices.getDisplayMedia(constrains);
          
        } catch (error) {
          console.log('error occurred when trying ot get and access to screen share stream');
          console.log(error);
          
        }
        if(stream){
          setScreenSharingStream(stream);
          webRTCHandler.toggleScreenShare(isScreenSharingActive,stream);
          setIsScreenSharingActive(true);
          //execute here function to switch the video track which we are sending to other user
        }
      }
      else{
        webRTCHandler.toggleScreenShare(isScreenSharingActive);
        //switch for video track from camera
        setIsScreenSharingActive(false);

        //stop screen share stram
        // setScreenSharingStream.getTracks().forEach(t=>t.stop())

        screenSharingStream.getTracks().forEach((track) => {
          track.stop();
        });
        setScreenSharingStream(null);
      }

      // setIsScreenSharingActive(!isScreenSharingActive);
    }


  return (
    <>
    <div className='video_button_container'>
        <img
        src={SwitchImg}
        onClick={handleScreenShareToggle}
        className='video_button_image'
        />
    </div>
    {isScreenSharingActive && (
      <LocalScreenSharingPreview stream={screenSharingStream}/>
    )}
    </>
  )
}

export default ScreenSharingButton