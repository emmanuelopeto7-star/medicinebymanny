import react from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, BriefcaseMedical, House, LogIn } from 'lucide-react';
import { useSelector } from 'react-redux'


function Navbar() {
    const cartItems = useSelector(state => state.cart.items)
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white px-8 py-4 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-extrabold tracking-wide">MedicineByManny</h1><Link to="/" className="text-sm text-gray-300 hover:text-white"></Link>
            <div className="flex gap-4">
                <Link to= "/" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg"><House /></Link>
                <Link to= "/Medicines" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg"><BriefcaseMedical /></Link>
                <Link to= "/Cart" className="relative bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg"><ShoppingCart /> {totalItems > 0 && <span className=" absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm">{totalItems}</span>}</Link>
                <Link to="/Login" className="bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg"><LogIn /></Link>
            </div>
    
        </nav>
    )
}
            
export default Navbar