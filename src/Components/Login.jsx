import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const[username, setUsername]=useState('')
    const[password, setPassword]= useState('')
    const{setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
     <h2> Log in</h2>
     <input style={{ width: '200px', height: '50px', padding: '1px' }}   type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
     <input style={{ width: '200px',margin: '10px', height: '50px', padding: '1px' }}  type='text'  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
     <button style={{ width: '100px', margin: '10px', height: '50px', padding: '1px' }} onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Login
