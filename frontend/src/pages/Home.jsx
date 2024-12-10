import { useEffect, useState } from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import FeaturedProducts from '../Components/FeaturedProducts'
import { useProducts } from '../context/ProductContext'

const products = [
  { id: 1, name: 'Leather Backpack', price: '$129.99', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'Urban Gear' },
  { id: 2, name: 'Wireless Earbuds', price: '$89.99', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'SoundWave' },
  { id: 3, name: 'Smart Watch', price: '$199.99', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'TechTime' },
  { id: 4, name: 'Sunglasses', price: '$59.99', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'ShadeStyle' },
  { id: 5, name: 'Running Shoes', price: '$119.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'SpeedFoot' },
  { id: 6, name: 'Smartphone', price: '$699.99', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'TechNova' },
]

export default function EcommerceLanding() {
  const { state, fetchProducts } = useProducts();
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        {/* Hero section */}
        <HeroSection />

        {/* Featured products section */}
        <FeaturedProducts products={state.products} />

        {/* Call to action section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Boost your style game.</span>
              <span className="block">Start shopping today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Join our community of trendsetters and get exclusive access to new arrivals, special offers, and style tips.
            </p>
            <a href="#" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
              Sign up for free
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

