import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className= "flex flex-col items-center justify-center text-center py-20 px-6">
    <h1 className= "text-5xl font-extrabold text-white mb-4">Welcome to MedicineByManny</h1>
    <p className= "text-xl text-white mb-4">Your trusted online pharmacy.Get your Drugs delivered to your doorstep!</p>
    <div className= "flex gap-4">
      <Link to= "/Medicines" className= "bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:scale-105 shadow-lg text-lg">Browse Medicines</Link>
        <Link to= "/Login" className= "bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:scale-105 shadow-lg text-lg">Login</Link>
    </div>
    <br />
    <div className= "grid grid-cols-2 justify-center gap-6 px-6 pb-20">
    <div className= "bg-white rounded-3xl shadow-xl p-8 w-64 text-center">
        <h2 className= "text-2xl font-bold text-purple-600 mb-4">Fast Delivery</h2>
        <p className= "text-gray-600">Get your medicines delivered to your doorstep in record time.</p>
    </div>
    <div className= "bg-white rounded-3xl shadow-xl p-8 w-64 text-center">
        <h2 className= "text-2xl font-bold text-purple-600 mb-4">Verified Prescriptions</h2>
        <p className= "text-gray-600">Get your prescriptions refilled and verified by licensed pharmacists.</p>
    </div>
    <div className= "bg-white rounded-3xl shadow-xl p-8 w-64 text-center">
        <h2 className= "text-2xl font-bold text-purple-600 mb-4">Prescription verification</h2>
        <p className= "text-gray-600">Check on the validity of your prescriptions.</p>
    </div>
    <div className= "bg-white rounded-3xl shadow-xl p-8 w-64 text-center">
        <h2 className= "text-2xl font-bold text-purple-600 mb-4">AI consultations</h2>
        <p className= "text-gray-600">Get personalized medical advice from our AI-powered chatbot.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home