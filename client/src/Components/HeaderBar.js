import React from 'react'
import logo from "../Images/logo.svg";
import '../Styles/HeaderBar.css'
function HeaderBar() {
  return (
    <div className="HeaderBar">
        <div className="logo-contact">
          <img src={logo} />
        <p className='contact'>Contact</p>
        </div>
      </div>
  )
}

export default HeaderBar