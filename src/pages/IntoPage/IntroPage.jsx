import React from 'react'
import logo from '../../assets/logo.png'
import './IntroPage.css'
import ConButtons from './ConButtons'
const IntroPage = (props) => {
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_pag_image"/>
        <ConButtons/>
      </div>
    </div>
  )
}

export default IntroPage