import React, { useState } from 'react'
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from '../Firebase'

const SignupPages = () => {
  
    const auth = getAuth()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=>{
            alert('success')
        })
    }
  return (
    <div>
    <h1>signup page</h1>
        <label htmlFor="">name</label>
        <input type="email" onChange={ (e)=>setEmail(e.target.value) } value = {email} />
        <label htmlFor="">password</label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
        <button className="submit" onClick={createUser} >signup</button>
    </div>
  )
}

export default SignupPages