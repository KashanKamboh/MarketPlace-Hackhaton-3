// "use client"
// import React, { useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";


export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch product data using the product ID
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    "image": image.asset->url
  }`;
  const product = await client.fetch(query, { id: params.id });

  if (!product) {
    return <div className="text-center text-gray-500">Product not found.</div>;
  }


  return (
    <div>
      
       <section className="max-w-5xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Product Image */}
            <div className="w-full h-96 relative">
              <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg font-semibold text-blue-600 mb-6">Price: ${product.price}</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
               <p>4</p>
                <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">253 ratings and 27 reviews</p>
                </div>
               <h3 className="text-lg sm:text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                   <button type="button"
                      className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">SM</button>
                      <button type="button"
                      className="w-10 h-9 border border-blue-600 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">MD</button>
                      <button type="button"
                        className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">LG</button>
                        <button type="button"
                        className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0">XL</button>
              </div>
                {/* Add to Cart Button */}    
                  <div className="mt-6 flex flex-wrap gap-4">
                        <button type="button"
                            className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  ">Add
                              to wishlist</button>
                          <button type="button"
                             className="px-4 py-3 w-[45%] border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold  ">Add
                               to cart
                               </button>
                   </div>  
                  {/*select delivery location*/}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6">Select Delivery Location</h3>
                       <p className="text-gray-500 text-sm mt-1">Enter the pincode of your area to check product availability.</p>
                        <div className='flex items-center gap-2 mt-4 max-w-sm'>
                                <input type='number' placeholder='Enter pincode'
                                  className='bg-gray-100 px-4 py-2.5 text-sm w-full  border-0 outline-0' />
                                <button type='button'
                                className='border-0 outline-0 bg-blue-600 hover:bg-blue-700 text-white  px-4 py-2.5 text-sm'>Apply</button>
                        </div>
                         </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">Product Information</h3>
                            <p className="text-gray-700 mt-4">{product.description}</p>

                    <button type="button"
                         className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center">
                          <span className="mr-4">Return and exchange policy</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                              viewBox="0 0 24 24">
                               <path fill-rule="evenodd"
                               d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000"></path>
                        </svg>
                    </button>
           <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Customer Reviews</h3>
            <div className="flex items-center gap-1.5 mt-4">
              <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
                <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                   d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
                <svg className="w-5 h-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
             </svg>
           </div>

           <div className="flex items-center flex-wrap gap-4 mt-4">
            <h4 className="text-2xl sm:text-3xl text-gray-800 font-semibold">4.0 / 5</h4>
            <p className="text-sm text-gray-500">Based on 253 ratings</p>
            </div>
            </div>
            </div>
          </div>
        </section>
      
    </div>
  );
}

