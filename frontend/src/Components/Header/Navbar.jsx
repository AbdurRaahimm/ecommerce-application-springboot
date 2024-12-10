// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-base font-medium text-gray-500 hover:text-gray-900">Shop</Link>
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link>
            <Link to="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">Dashboard</Link>
        </nav>
    )
}

export default Navbar