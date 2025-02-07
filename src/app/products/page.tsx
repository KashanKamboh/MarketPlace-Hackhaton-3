
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// import { Product } from "@/sanity/lib/sanity";
// import { addToCart } from "../actions/actions";
// import Swal from "sweetalert2";


// // interface Product {            
// //   id: number;
// //   name: string;
// //   price: number;
// //   image: string;
// //   description: string; 
// //   discountPercentage: number;
// //   rating: string; 
// // }

// const Shop = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
 

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         name,
//         price,
//         "image": image.asset->url,
//         description,
//         discountPercentage,
//         rating 
//       }`; 
//       const result: Product[] = await client.fetch(query); 
//       setProducts(result); 
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position:"top-right",
//       icon: "success",
//       title: `${product.name} added to cart`,
//       showConfirmButton: false,
//       timer: 1500
//     })
//     addToCart(product);
  
    
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <section className="">
//         <div className="max-w-[1200px] mx-auto">
//           {/* Main Product Image */}
//           <div className="w-full max-w-[1440px] h-auto my-6">
//             <Image
//               src="/images/product.png"
//               alt="product"
//               width={1210}
//               height={1000}
//               layout="responsive"
//               priority
//             />
//           </div>

          
//           <h3 className="text-blue-950 text-[22px] font-bold mb-10">
//             Our Latest Products
//           </h3>
//           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="col-span-1 hover:shadow-lg transition-all border rounded-lg overflow-hidden"
//               >
//                 {/* Product Image */}
//                 <div className="w-full h-64 bg-gray-100">
//                   <Link href={`/products/${product._id}`}>
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={300}
//                       height={200}
//                       className="w-full h-full object-cover"
//                     />
//                   </Link>
//                 </div>

//                 {/* Product Metadata */}
//                 <div className="p-4 text-center ">
//                   <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//                   <p className="text-gray-700 font-medium text-lg">
//                     ${product.price}
//                   </p>
//                   <button
//                     onClick={(e)=> handleAddToCart(e, product)}
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Shop;




"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity/lib/sanity"; // Make sure this path and type are correct
// import Swal from "sweetalert2";
import SearchAndFilter from "../components/SearchAndFilter"; // Correct path
import Pagination from "../components/Pagination"; // Correct path
import { toast } from 'react-toastify'; // Import toast
import { addToCart } from "../actions/actions";


const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the correct Product type
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Use the correct Product type
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [, setCartCount] = useState(0);

  const fetchData = async () => {
    try {
      const query = `*[_type == "product"]{
        _id, name, price, "image": image.asset->url, description, discountPercentage, rating
      }`;
      const result: Product[] = await client.fetch(query); // Use the correct Product type
      setProducts(result);
      setFilteredProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);
        setCartCount(parsedCartItems.length);
      } catch (error) {
        console.error("Error parsing cartItems from localStorage:", error);
        setCartCount(0);
      }
    } else {
      setCartCount(0);
    }
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    // Swal.fire({
    //   position: "top-right",
    //   icon: "success",
    //   title: `${product.name} added to cart`,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });

    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : []; // Use const here
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    addToCart(product);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <div className="max-w-[1200px] mx-auto">
          {/* Main Banner (Replace with your actual image path) */}
          <div className="w-full max-w-[1440px] h-auto my-6 relative">
            <Image
              src="/images/product.png" // Replace with your image path
              alt="product"
              width={1440}
              height={1000}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <SearchAndFilter products={products} setFilteredProducts={setFilteredProducts} />

          <h3 className="text-blue-950 text-[22px] font-bold mb-10">
            Our Latest Products
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="col-span-1 hover:shadow-lg transition-all border rounded-lg overflow-hidden relative"
              >
                <div className="w-full h-64 bg-gray-100 relative">
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.image} // Make sure this path is correct for your Product type
                      alt={product.name}
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="100vw"
                    />
                  </Link>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 font-medium text-lg">${product.price}</p>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
};

export default Shop;
