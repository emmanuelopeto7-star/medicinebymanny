import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Medicines from './Pages/Medicines'
import Cart from './Pages/Cart'
import Login from './Pages/Login'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Medicines' element={<Medicines />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App