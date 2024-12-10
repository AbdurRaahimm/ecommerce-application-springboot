import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '../Components/Sidebar';
import { ProductList } from '../Components/ProductList';
import { useProducts } from '../context/ProductContext';

export default function Products() {
  const { state, fetchProducts } = useProducts();
  const products = state.products || [];

  useEffect(() => {
    fetchProducts();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    productName: '',
    companies: [],
    priceRange: [0, 1000],
  });

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        className="md:hidden mb-4 p-2 bg-indigo-600 text-white rounded flex items-center gap-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
        <span>Toggle Sidebar</span>
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          filters={filters}
          updateFilters={updateFilters}
          products={products}
        />
        <ProductList filters={filters} products={products} />
      </div>
    </div>
  );
}
