import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useEffect} from 'react'
import Home from './components/UI/Home.jsx';
import Dashboard from './components/UI/Dashboard.jsx';
import { auth } from "./firebase-config.js";
import { useDispatch } from "react-redux";
import { signUserOut, signIn } from "./components/Reducers/userSlice.js";
import {getAuth, signOut} from 'firebase/auth';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(signIn(userAuth))
      }
      else {
        dispatch(signUserOut())
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log('successfully signed out')
        }).catch((err) => {
          console.log(err.message)
        })
      }
    })
    return unsubscribe;

  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
