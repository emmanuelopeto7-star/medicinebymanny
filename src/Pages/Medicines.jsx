
import Navbar from '../Components/Navbar'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/cartSlice'

const Medicines = () => {
    const [medicines, setMedicines] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'medicines'))
                const list = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setMedicines(list)
                setLoading(false)
            }
            catch (error) {
                console.error('Error fetching medicines:', error)
            }
        }
        fetchMedicines()
    }, [])

    if (loading){
        return (
            <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-500">Loading medicines...</p>
            </div>
        )
    }
            return (
                <>
                <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-6">Available Medicines</h2>
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {medicines.map(medicine => (
                        <div key={medicine.id} className="bg-white rounded-3xl shadow-xl p-6">
                            <h3 className="text-xl font-extrabold text-purple-600 mb-2">{medicine.name}</h3>
                            <p className="text-gray-600 mb-4">{medicine.description}</p>
                            <p className="text-lg font-bold text-purple-600 mb-4">${medicine.price}</p>
                            <span className="text-lg text-gray-500">In stock: {medicine.stock}</span>
                            <span className="text-sm text-gray-400 block mt-2">Category: {medicine.category}</span>
                            {medicine.prescriptionRequired && <span className="text-sm text-red-500 block mt-2">Prescription required</span>}
                            <button 
                                onClick={() => dispatch(addToCart(medicine))}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold p-3 rounded-2xl hover:scale-105 transition-transform shadow-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
                </>
            )
    }
      

export default Medicines
