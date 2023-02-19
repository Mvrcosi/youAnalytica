import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Home from './components/UI/Home.jsx';
import Dashboard from './components/UI/Dashboard.jsx';

const App = () => {
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
