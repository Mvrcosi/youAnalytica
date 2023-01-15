import React from 'react'
import {auth, provider} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userActions } from '../../store'

const GoogleSignIn = (props:any) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signInWithGoogle = async () => {

      const result = await signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(userActions.signInWithGoogle(res.user))
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err.message) 
      })

  }

  return (
    <button onClick={signInWithGoogle} className='outline outline-white	bg-none p-3 border-none rounded-lg hover:bg-sky-700 w-40'>{props.text}</button>
  )
  
}

export default GoogleSignIn;
