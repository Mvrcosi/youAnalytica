import React from 'react'
import {auth, provider} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useDispatch} from 'react-redux'

// actions are the reducers that have logic
// to do something inside our users
// like sign in or sign out
import { userActions } from '../../store'

const GoogleSignIn = (props:any) => {

  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    dispatch(userActions.signInWithGoogle(result.user))
  }

  return (
    <button onClick={signInWithGoogle} className='outline outline-white	bg-none p-3 border-none rounded-lg hover:bg-sky-700 w-40'>{props.text}</button>
  )
  
}

export default GoogleSignIn