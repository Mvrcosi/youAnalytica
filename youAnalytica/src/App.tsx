import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useEffect} from 'react'
import Home from './components/UI/Home.jsx';
import Dashboard from './components/UI/Dashboard.jsx';
import PrivateRoutes from "./components/Utils/PrivateRoutes.js";




function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
