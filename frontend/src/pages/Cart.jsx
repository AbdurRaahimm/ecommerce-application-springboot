import React from 'react'
import { useCart } from '../context/CartContext';

export default function Cart() {
    const { state, dispatch } = useCart();
    const handleRemove = (id) => {
        // alert(id)
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 px-8 py-5">Your Cart</h1>
            {state.items.length === 0 ? (
                <p className="text-lg text-center">Your cart is currently empty.</p>
            ) : (
                <div className='px-10 py-8'>
                    <ul className="space-y-4">
                        {state.items.map((item, index) => (
                            <li key={index} className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                    {/* <p className="text-gray-600">Quantity: {item.quantity}</p> */}
                                </div>
                                <div>
                                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        {/* <h2 className="text-xl font-bold">Total: ${state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2> */}
                        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Checkout</button>
                    </div>
                </div>
            )}
        </>
    )
}
