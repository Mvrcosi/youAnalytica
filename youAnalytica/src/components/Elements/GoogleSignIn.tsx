import React from 'react'
import {auth, provider, database} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'

const GoogleSignIn = (props:any) => {

  const signInWithGoogle = async () => {
      await signInWithPopup(auth, provider)
  }

  return (
    <button onClick={signInWithGoogle} className='outline outline-white	bg-none p-3 border-none rounded-lg hover:bg-sky-700 w-40'>{props.text}</button>
  )
  
}

export default GoogleSignIn;
