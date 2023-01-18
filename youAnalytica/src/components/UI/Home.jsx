import React, {useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUserOut, signIn } from "../Reducers/userSlice";
import {getAuth, signOut} from 'firebase/auth';


import GoogleSignIn from '../Elements/GoogleSignIn'


const Home = () => {

  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(signIn(userAuth))
        navigate('/dashboard')
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className='bg-gray-600 w-screen h-screen flex justify-center items-center'>
        <GoogleSignIn className='flex justify-center items-center' text='Sign In'  />
    </div>
  )
}

export default Home