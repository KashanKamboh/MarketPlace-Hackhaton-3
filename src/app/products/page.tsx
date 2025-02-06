
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
import { Product } from "@/sanity/lib/sanity"; // Ensure this is correctly defined
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import SearchAndFilter from "../components/SearchAndFilter";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
 try {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        "image": image.asset->url,
        description,
        discountPercentage,
        rating 
      }`; 
      const result: Product[] = await client.fetch(query); 
      setProducts(result);
      setFilteredProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500
    });
    addToCart(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full max-w-[1440px] h-auto my-6">
            <Image
              src="/images/product.png"
              alt="product"
              width={1210}
              height={1000}
              layout="responsive"
              priority
            />
          </div>

          <SearchAndFilter products={products} setFilteredProducts={setFilteredProducts} />
          
          <h3 className="text-blue-950 text-[22px] font-bold mb-10">
            Our Latest Products
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="col-span-1 hover:shadow-lg transition-all border rounded-lg overflow-hidden"
              >
                <div className="w-full h-64 bg-gray-100">
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                     
                    />
                  </Link>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 font-medium text-lg">
                    ${product.price}
                  </p>
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
        </div>
      </section>
    </div>
  );
};

export default Shop;
