import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { removeFromCart, clearCart } from '../Store/cartSlice'


function Cart() {
  const cartItems = useSelector(state => state.cart.items)

  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)


  return (
    <>
    <h1 className='text-4xl font-extrabold text-white text-center mb-10'>Your cart</h1>
    {cartItems.length === 0 ? (
      <div className='text-center text-white text-xl'>Your cart is empty</div>
    ) : (
      <div className ="max-w-4xl mx-auto ">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-purple-600">{item.name}</h2>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-pink-600 font-bold">Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <p className="text-sm text-gray-400">Available: {item.stock}</p>
              <p className="text-sm text-gray-400">Category: {item.category}</p>
              {item.prescriptionRequired && <p className="text-sm text-red-500">Prescription required</p>}
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:scale-105 transition-transform ">REMOVE</button>
              </div>
        ))}
        <div className="bg-white rounded-3xl shadow-xl p-6 mt-6 text-center">
          <h2 className="text-2xl font-bold text-purple-600">Total: ${total.toFixed(2)}</h2>
          <button onClick={() => dispatch(clearCart())} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-2xl hover:scale-105 transition-transform">CHECKOUT</button>

        </div>

            

        
      </div>
)}
    )
    </>
    
  )
}

export default Cart