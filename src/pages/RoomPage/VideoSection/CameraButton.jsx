import React,{useState} from 'react'
import CameraButtonImg from '../../../assets/camera.svg'
import CameraButtonImgOff from '../../../assets/cameraOff.svg'
import * as webRTCHandler from '../../../utils/webRTCHandler'

const CameraButton = () => {

    const [isLocalVideoDisabled,setIsLocalVideoDisabled]=useState(false)

    const handleCameraButtonPressed=()=>{
      webRTCHandler.toggleCamera(isLocalVideoDisabled)
      setIsLocalVideoDisabled(!isLocalVideoDisabled)
    }
  return (
    <div className='video_button_container'>
        <img src={isLocalVideoDisabled?CameraButtonImgOff:CameraButtonImg}
        onClick={handleCameraButtonPressed}
        className='video_button_image'
        />
    </div>
  )
}

export default CameraButton