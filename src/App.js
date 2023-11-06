import logo from './logo.svg';
import './App.css'
import Navbar from './Navbar'
import Home from "./pages/Home"
import Academics from './pages/Academics'
import Admission from './pages/Admission'
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
        </Routes>
      </div>
    </>
  )
}

export default App;
