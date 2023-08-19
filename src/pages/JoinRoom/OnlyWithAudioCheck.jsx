import React from 'react'
import CheckImg from '../../assets/check.png'

const OnlyWithAudioCheck = ({setConnectOnlyWithAudio,connectOnlyWithAudio}) => {

    const HandleConnectionTypeChange=()=>{
        setConnectOnlyWithAudio(!connectOnlyWithAudio);

    }
  return (
    <div className='checkbox_container'>
        <div className='checkbox_connection' onClick={HandleConnectionTypeChange}>
            { connectOnlyWithAudio && (
                <img className='checkbox_image' src={CheckImg} alt="checkmark"></img>
            ) }
        </div>
        <p className='checkbox_container_paragraph'>Only Audio</p>
    </div>
  )
}

export default OnlyWithAudioCheck