import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
        <span className='logo'>Admin-Chat-App</span>
        <span className='title'>Login</span>
      <form>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        
        <button>Login</button>
      </form>
      <p>You Don't have an account? Register</p>

       </div>

    </div>
  )
}

export default Login;