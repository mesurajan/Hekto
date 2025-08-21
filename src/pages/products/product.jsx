import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBreadcrumbs from '../../components/Breadcrumbs';
import { Products } from '../../assets/productmockdata';
import { CiSearch } from 'react-icons/ci';

function Product() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['all', 'chairs', 'beds', 'tables', 'wardrobes'];

  // Filter products by search term
  const searchFilteredProducts = Products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group products by category
  const groupedProducts = categories.reduce((acc, category) => {
    if (category === 'all') return acc;
    acc[category] = searchFilteredProducts.filter(p => p.category === category);
    return acc;
  }, {});

  return (
    <div className='bg-white container text-[#0A174E] mb-15'>
      {/* Page Title + Breadcrumb */}
      <div className='bg-backgroundlite py-4'>
        <h1 className='text-3xl font-bold px-4'>Our Products</h1>
        <AppBreadcrumbs />
      </div>

      {/* Intro Section */}
        <div className='mt-10 md:mt-20 mb-6 md:mb-12 flex flex-col px-4'>
          <header>
            <h1 className='font-bold text-2xl md:text-3xl'>
              Explore Premium Furniture & Trendy Home Accessories
            </h1>
          </header>
          <p className='mt-3 text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed text-justify'>
            Discover a curated collection of stylish furniture and home essentials 
            designed to complement every corner of your living space. From timeless 
            classics to modern trends, our range is carefully selected to bring both 
            comfort and elegance into your home. Whether you're furnishing your living 
            room, bedroom, or workspace, we have something to match your style and 
            elevate your everyday living.
          </p>
        </div>

      {/* Search + Category Selector */}
      <div className="flex flex-row md:items-center gap-4 md:gap-6 px-4 md:px-0">
        {/* Curated Text */}
        <p className="text-xl font-semibold hidden md:block whitespace-nowrap px-4">
          Curated Collection of Stylish Furniture
        </p>

        {/* Search Bar */}
        <div className="flex items-center gap-0 md:ml-4 md:flex-1 md:justify-end">
          <input
            type="text"
            className="h-8 px-2 border-2 focus:outline-none min-w-0 max-w-[300px]"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center justify-center h-8 px-3 cursor-pointer bg-background">
            <CiSearch color="white" size={20} />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="min-w-0 max-w-[300px] md:ml-4">
          <label htmlFor="categories" className="sr-only">Select Category</label>
          <select
            id="categories"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-6 px-4 md:px-4 space-y-12 py-8 md:py-20">
        {selectedCategory === 'all' ? (
          // Show grouped by category
          <>
            {['chairs', 'beds', 'tables', 'wardrobes'].map((cat) => {
              const items = groupedProducts[cat] || [];
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h2 className="text-2xl font-bold mb-6 capitalize">
                    {cat} In Our Collection
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    {items.map((product) => (
                      <div
                        key={product.id}
                        className="flex flex-col items-center p-4 rounded bg-background-secondary hover:border-2 hover:border-blue-900 transition-all duration-300"
                      >
                        <img
                          src={product.chairimage}
                          alt={product.title}
                          className="w-full h-[240px] object-contain mb-2"
                        />
                        <div className="text-center mb-4 flex-1">
                          <h3 className="text-lg font-semibold">{product.title}</h3>
                          <p className="text-blue-900 font-bold mt-1">{product.price}</p>
                        </div>
                        <div className="flex gap-2 w-full justify-center mt-auto mb-2">
                          <Link to={`/productDetails/${product.id}`} className="flex-1">
                            <button className="w-full px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-700 transition">
                              View Details
                            </button>
                          </Link>
                          <button className="flex-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500 transition">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          // Show only selected category
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {searchFilteredProducts
              .filter((p) => p.category === selectedCategory)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center p-4 rounded bg-background-secondary hover:border-2 hover:border-blue-900 transition-all duration-300"
                >
                  <img
                    src={product.chairimage}
                    alt={product.title}
                    className="w-full h-[240px] object-contain mb-2"
                  />
                  <div className="text-center mb-4 flex-1">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-blue-900 font-bold mt-1">{product.price}</p>
                  </div>
                  <div className="flex gap-2 w-full justify-center mt-auto mb-2">
                    <Link to={`/productDetails/${product.id}`} className="flex-1">
                      <button className="w-full px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-700 transition">
                        View Details
                      </button>
                    </Link>
                    <button className="flex-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
        {/* No results */}
        {searchFilteredProducts.length === 0 && (
          <p className="text-center col-span-full mt-4 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Product;
