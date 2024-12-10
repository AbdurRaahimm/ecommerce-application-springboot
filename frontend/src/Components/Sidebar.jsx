import { X } from 'lucide-react';


export function Sidebar({ isOpen, onClose, filters, updateFilters , products }) {
  const handleProductNameChange = (e) => {
    updateFilters({ productName: e.target.value });
  };

  const handleCompanyChange = (company) => {
    const updatedCompanies = filters.companies.includes(company)
      ? filters.companies.filter((c) => c !== company)
      : [...filters.companies, company];
    updateFilters({ companies: updatedCompanies });
  };

  const handlePriceChange = (value, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = Math.max(0, value); // Ensure non-negative values
    updateFilters({ priceRange: newPriceRange });
  };

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </button>
      </div>
      <div className="space-y-6">
        {/* Product Name Filter */}
        <div>
          <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            value={filters.productName}
            onChange={handleProductNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search products..."
          />
        </div>

        {/* Company Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700">Company</p>
          {Array.from(new Set(products.map(product => product.company?.name))).map(company => (
            <div key={company} className="flex items-center">
              <input
                id={company}
                type="checkbox"
                checked={filters.companies.includes(company)}
                onChange={() => handleCompanyChange(company)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={company} className="ml-2 text-sm text-gray-900">
                {company}
              </label>
            </div>
          ))}
         
        </div>

        {/* Price Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700">Price Range</p>
          <div className="flex space-x-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
            className="w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
}
