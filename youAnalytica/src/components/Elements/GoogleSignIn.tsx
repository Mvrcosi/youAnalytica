import React from 'react'
import {auth, provider, database} from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userActions } from '../../store'
import {collection, doc, getDoc, setDoc} from 'firebase/firestore'

const GoogleSignIn = (props:any) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signInWithGoogle = async () => {
      await signInWithPopup(auth, provider)
      .then(async (res) => {
        const docRef = doc(database, "users", res.user.uid);
        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()) {
          setDoc(doc(database, "users", res.user.uid), {
            subscriptions: {}
          })
        }
        dispatch(userActions.signInWithGoogle(res.user))
        navigate('/dashboard')
      }) 
      
  }

  return (
    <button onClick={signInWithGoogle} className='outline outline-white	bg-none p-3 border-none rounded-lg hover:bg-sky-700 w-40'>{props.text}</button>
  )
  
}

export default GoogleSignIn;
