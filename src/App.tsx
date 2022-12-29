import { Routes, Route } from 'react-router-dom'
import { Navbar1 } from './componets/Navbar'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Store } from './Pages/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SCSS/style.scss'

function App() {

  return (
    <>
    <Navbar1 />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
