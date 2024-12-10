import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

export function ProductList({ filters, products }) {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name?.toLowerCase().includes(filters.productName.toLowerCase());
    const companyMatch =
      filters.companies.length === 0 || filters.companies.includes(product.company?.name);
    const priceMatch =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return nameMatch && companyMatch && priceMatch;
  });

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={product.imgURL}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-2 py-1 text-xs font-bold uppercase">
                  {product.company?.name || 'Unknown'}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700 font-bold">
                  <a href="#">
                    {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button
                className="mt-4 w-full bg-black text-white py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
