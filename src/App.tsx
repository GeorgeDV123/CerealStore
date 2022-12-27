import { Routes, Route } from 'react-router-dom'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Store } from './Pages/Store'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
