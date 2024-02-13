import { useState } from 'react'
import { getDatabase,ref,set,} from 'firebase/database'
import {app} from './Firebase'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import './App.css'
import SignupPages from './pages/SignupPages'
import Signuinpages from './pages/Signuinpages'

//initilize database
const db = getDatabase(app)
const auth = getAuth(app)
function App() {

  const signupUser=()=>{
    createUserWithEmailAndPassword(
      auth,
      'khalidhaiderjafr@gmail.com',
       '1234@khalid'
       ).then((value)=>{
        console.log(value)
       }) 
    } 

  // const putData=()=>{
  //   set(ref(db,'users/khalid'),{
  //     id:1,
  //     name:'khalid' ,
  //     age:23
  //   })
  // }

  return (
   <>
   <SignupPages/>
    <Signuinpages/>
   </>
  )
}

export default App
