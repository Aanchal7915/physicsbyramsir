import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Course'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Trial from './pages/Trial'
import Privacy from './pages/Privacy'
import NotFound from "./pages/NotFound"
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/trial' element={<Trial/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path='*' element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
