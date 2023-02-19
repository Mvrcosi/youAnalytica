import React from 'react'
import {auth, provider, database} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'

const GoogleSignIn = (props:any) => {

  const signInWithGoogle = async () => {
      await signInWithPopup(auth, provider)
  }

  return (
    <button onClick={signInWithGoogle} className='outline outline-white	bg-none p-3 border-none rounded-lg hover:bg-sky-700 w-40'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s' className='w-5 h-5'></img>
    </button>
  )
  
}

export default GoogleSignIn;
