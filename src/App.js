import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Index'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portifolio from './components/Portifolio'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="/portifolio" element={<Portifolio />} />
          <Route index path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
