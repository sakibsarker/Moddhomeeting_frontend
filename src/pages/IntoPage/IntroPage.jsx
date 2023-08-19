import React, { useEffect } from 'react'
import logo from '../../assets/mlogo.png'
import './IntroPage.css'
import ConButtons from './ConButtons'
import {connect} from 'react-redux'
import {setIsRoomHost} from '../../store/action'

const IntroPage = ({setIsRoomHostAction}) => {
  useEffect(()=>{
    setIsRoomHostAction(false)
  },[])
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_pag_image"/>
        <ConButtons/>
      </div>
    </div>
  )
}

const mapActionsToProps=(dispatch)=>{
  return{
    setIsRoomHostAction:(isRoomHost)=>dispatch(setIsRoomHost(isRoomHost))
  }
}


export default connect(null,mapActionsToProps)(IntroPage);