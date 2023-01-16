import React, {useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import GoogleSignIn from '../Elements/GoogleSignIn'


const Home = () => {


  return (
    <div className='bg-gray-600 w-screen h-screen flex justify-center items-center'>
        <GoogleSignIn className='flex justify-center items-center' text='Sign In'  />
    </div>
  )
}

export default Home