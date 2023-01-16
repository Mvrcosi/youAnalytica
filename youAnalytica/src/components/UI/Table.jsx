import React from 'react'
import {useSelector} from 'react-redux'
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import {auth, database} from '../../firebase-config'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Table = () => {

  const [data, setData] = useState('')

useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    const docRef = doc(database, "users", userAuth.uid);
    getDoc(docRef).then((doc) => {
      setData(doc.data())
    })
  })
}, [data])


const RenderData = data.subscriptions?.map((el, i) => {
  return <tr key={i} className='text-center'>
    <td className="">{el.subName}</td>
    <td className="">${el.subPrice}</td>
    <td className="">{el.subStartDate}</td>
    <td className="">{el.subEndDate}</td>
    <td className="">{el.subInterval}</td>
    <td className="">{el.interval}</td>
    <td className="">{el.card}</td>
  </tr>
})


  return (
<table className="border-collapse border border-slate-500 ...">
  <thead>
    <tr>
      <th className="border border-slate-600 ...">Name</th>
      <th className="border border-slate-600 ...">Price</th>
      <th className="border border-slate-600 ...">Start Date</th>
      <th className="border border-slate-600 ...">End Date</th>
      <th className="border border-slate-600 ...">Next Charge</th>
      <th className="border border-slate-600 ...">Interval</th>
      <th className="border border-slate-600 ...">Card</th>
    </tr>
  </thead>
  <tbody>
   {RenderData}
  </tbody>
</table>
  )
}

export default Table