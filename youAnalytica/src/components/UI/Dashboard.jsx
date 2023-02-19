import React, {useEffect} from 'react'
import Layout from './Layout'
import Table from './Table'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { getAuth } from '@firebase/auth'
import { signIn } from '../Reducers/userSlice'

const Dashboard = () => {
  

  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(signIn(userAuth))
      }
    })
    return unsubscribe;
  }, [dispatch])
  
  return (
    <Layout>
           <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
            <div className="grid lg:grid-cols-3 gap-5 mb-16">
              <div className="rounded bg-white h-40 shadow-sm"></div>
              <div className="rounded bg-white h-40 shadow-sm"></div>
              <div className="rounded bg-white h-40 shadow-sm"></div>
            </div>
            <div className="grid col-1 bg-white h-full shadow-sm mb-10">
            <Modal />
            <Table />
            </div>
    </Layout>
    
  )
}

export default Dashboard