import React from 'react'
import { useCart } from '../context/CartContext';

export default function FeaturedProducts({ products }) {
    // console.log(products)
    const { dispatch } = useCart();

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imgURL}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-2 py-1 text-xs font-bold uppercase">
                                    {product.company.name}
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700 font-bold">
                                        <a href="#">
                                            {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full bg-black text-white py-2 rounded"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
