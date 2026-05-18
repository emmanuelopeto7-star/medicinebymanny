import {link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
            <h1 className= "text-xl font-bold">MedicineByManny</h1>
            <div claaName="flex gap-6">
                <Link to = "/">Home</Link>
                <Link to = "/Medicines">Medicines</Link>
                <Link to = "/Cart">Cart</Link>
                <Link to ="/Login">Login</Link>
            </div>
        </nav>
    )
}
            
export default Navbar