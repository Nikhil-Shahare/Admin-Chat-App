import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Admin-Chat</span>
      <div className='user'>
        <img src='' alt=''/>
        <span>Krishna</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar;