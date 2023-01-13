import React from 'react'

import GoogleSignIn from '../Elements/GoogleSignIn'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase-config";
import { signInWithGoogle, signOut } from "../Reducers/userSlice";



const Home = () => {


  const user = useSelector(state=> state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(signInWithGoogle(user))
      }
      else {
        dispatch(signOut)
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className='bg-gray-600 w-screen h-screen flex justify-center items-center'>
        <GoogleSignIn className='flex justify-center items-center' text='Sign In'  />
    </div>
  )
}

export default Home