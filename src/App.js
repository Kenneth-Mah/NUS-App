import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Academics from './pages/Academics'
import Admission from './pages/Admission'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
