import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
        <span className='logo'>Admin-Chat-App</span>
        <span className='title'>Register</span>
      <form>
        <input type='text' placeholder='Display Name'/>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <input type = "file" />
        <button>Sign up</button>

      </form>
      <p>Already have an account? Login</p>

       </div>

    </div>
  )
}

export default Register