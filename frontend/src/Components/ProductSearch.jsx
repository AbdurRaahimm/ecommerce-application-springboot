

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import { Search, X } from 'lucide-react'


export function ProductSearch({ products, isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setSearchTerm('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.company.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setResults(filteredProducts)
      setSelectedIndex(-1)
    } else {
      setResults([])
    }
  }, [searchTerm, products])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prevIndex => 
        prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        selectProduct(results[selectedIndex])
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const selectProduct = (product) => {
    setSearchTerm(product.name)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div ref={searchRef} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Search Products
                </h3>
                <div className="mt-2 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search products or companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Search products"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                {results.length > 0 && (
                  <ul className="mt-4 max-h-60 overflow-auto">
                    {results.map((product, index) => (
                      <li
                        key={product.id}
                        className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                          index === selectedIndex ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`}
                        onClick={() => selectProduct(product)}
                      >
                        <div className="flex items-center">
                          <img src={product.imgURL} alt="" className="h-10 w-10 flex-shrink-0 rounded-full" />
                          <div className="ml-3">
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.company.name}</p>
                          </div>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                          {product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {searchTerm && results.length === 0 && (
                  <p className="mt-2 text-sm text-gray-500">No results found</p>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

