// import { Product } from "@/sanity/lib/sanity";
// import React, { useState } from "react";

// // type Product = {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   image: string;
// //   description: string;
// //   discountPercentage: number;
// //   rating: number;
// // };

// type SearchAndFilterProps = {
//   products: Product[];
//   setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
// };

// const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, setFilteredProducts }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
//   const [rating, setRating] = useState<number>(0);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     filterProducts(e.target.value, priceRange, rating);
//   };

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Number(e.target.value);
//     setPriceRange([0, value]);
//     filterProducts(searchQuery, [0, value], rating);
//   };

//   const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = Number(e.target.value);
//     setRating(value);
//     filterProducts(searchQuery, priceRange, value);
//   };

//   const filterProducts = (query: string, price: [number, number], rating: number) => {
//     const filtered = products.filter((product) => {
//       return (
//         product.name.toLowerCase().includes(query.toLowerCase()) &&
//         product.price >= price[0] &&
//         product.price <= price[1] &&
//         product.rating >= price[2]
      
        
//       );
//     });
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b border-gray-300">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={handleSearch}
//         className="border p-2 rounded w-full md:w-1/3"
//       />

//       {/* Price Filter */}
//       <div className="flex items-center gap-2">
//         <label>Max Price:</label>
//         <input
//           type="range"
//           min="0"
//           max="1000"
//           value={priceRange[1]}
//           onChange={handlePriceChange}
//           className="cursor-pointer"
//         />
//         <span>${priceRange[1]}</span>
//       </div>

//       {/* Rating Filter */}
//       <div className="flex items-center gap-2">
//         <label>Min Rating:</label>
//         <select value={rating} onChange={handleRatingChange} className="border p-2 rounded">
//           <option value="0">All</option>
//           <option value="1">1+</option>
//           <option value="2">2+</option>
//           <option value="3">3+</option>
//           <option value="4">4+</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchAndFilter;

import { Product } from "@/sanity/lib/sanity";
import React, { useState } from "react";

type SearchAndFilterProps = {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [rating, setRating] = useState<number>(0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value, priceRange, rating);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    filterProducts(searchQuery, [0, value], rating);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setRating(value);
    filterProducts(searchQuery, priceRange, value);
  };

  const filterProducts = (query: string, price: [number, number], rating: number) => {
    const filtered = products.filter((product) => {
      const productNameMatch = product.name?.toLowerCase().includes(query.toLowerCase()) || false; // Handle undefined name
      const priceMatch = product.price >= price[0] && product.price <= price[1];
      const ratingMatch = product.rating !== undefined && product.rating >= rating; // Handle undefined rating and use rating state

      return productNameMatch && priceMatch && ratingMatch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b border-gray-300">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={handleSearch}
      className="border p-2 rounded w-full md:w-1/3"
    />

    {/* Price Filter */}
    <div className="flex items-center gap-2">
      <label>Max Price:</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="cursor-pointer"
      />
      <span>${priceRange[1]}</span>
    </div>

    {/* Rating Filter */}
    <div className="flex items-center gap-2">
      <label>Min Rating:</label>
      <select value={rating} onChange={handleRatingChange} className="border p-2 rounded">
        <option value="0">All</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>
    </div>
  </div>
  );
};

export default SearchAndFilter;