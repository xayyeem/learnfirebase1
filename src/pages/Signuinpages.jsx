import React, { useState } from 'react'
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../Firebase'

const Signuinpages = () => {
    const auth = getAuth()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=()=>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>{
            alert(value)
        }
        ).catch((error)=>{
            alert(error.message)
        })
    }
  return (
    <div>
        <h1>Signuinpages</h1>
        <label htmlFor="" >email</label>
        <input type="email" placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
        <label htmlFor=''  >password</label>
        <input placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" />
        <button onClick={signIn} className="submit">login</button>
    </div>
  )
}

export default Signuinpages