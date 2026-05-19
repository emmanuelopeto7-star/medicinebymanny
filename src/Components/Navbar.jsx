import react from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white px-8 py-4 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-extrabold tracking-wide">MedicineByManny</h1>
            <div className="flex gap-4">
                <Link to= "/" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">Home</Link>
                <Link to= "/Medicines" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">Medicines</Link>
                <Link to= "/Cart" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">Cart</Link>
                <Link to="/Login" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">Login</Link>
            </div>
        </nav>
    )
}
            
export default Navbar