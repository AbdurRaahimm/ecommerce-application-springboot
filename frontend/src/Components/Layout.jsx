import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { ProductSearch } from './ProductSearch'
import { useProducts } from '../context/ProductContext'

const products = [
  { id: 1, name: 'Leather Backpack', price: '$129.99', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'Urban Gear' },
  { id: 2, name: 'Wireless Earbuds', price: '$89.99', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'SoundWave' },
  { id: 3, name: 'Smart Watch', price: '$199.99', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'TechTime' },
  { id: 4, name: 'Sunglasses', price: '$59.99', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'ShadeStyle' },
  { id: 5, name: 'Running Shoes', price: '$119.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'SpeedFoot' },
  { id: 6, name: 'Smartphone', price: '$699.99', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', company: 'TechNova' },
]

export default function Layout() {
  const { state, fetchProducts } = useProducts();
  useEffect(() => {
    fetchProducts()
  }, [])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <div>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setSearchOpen={setSearchOpen}
      />
      <Outlet />
      <Footer />
      <ProductSearch products={state.products} isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
