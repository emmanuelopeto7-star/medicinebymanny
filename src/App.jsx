import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Medicines from './Pages/Medicines'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Medicines' element={ <ProtectedRoutes><Medicines /></ProtectedRoutes> } />
        <Route path='/Cart' element={ <ProtectedRoutes><Cart /></ProtectedRoutes> } />
        <Route path='/Login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App