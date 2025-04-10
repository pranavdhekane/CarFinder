import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Footer } from "./components/Footer"
import CarList from "./components/SearchPage"
import WishList from "./components/WishList"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="lg:px-30 lg:py-3">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/cars' element={<CarList/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
