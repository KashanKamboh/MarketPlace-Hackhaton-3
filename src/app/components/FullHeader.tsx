

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaWindowClose } from "react-icons/fa";


// const FullHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
//   const [isSearchBarOpen, setIsSearchBarOpen] = useState(false); // For search bar visibility
//   const [searchQuery, setSearchQuery] = useState(""); // For search input


//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Toggle search bar
//   const toggleSearchBar = () => {
//     setIsSearchBarOpen(!isSearchBarOpen);
//   };

//   return (
//     <div>
//       <header className="shadow-md font-sans tracking-wide relative z-50">
//         {/* Top section with notification */}
//         <section className="flex items-center justify-between py-2 bg-[#2A254B] text-white px-10">
//           <p className="text-sm text-center w-full">
//             Free delivery on all orders over £50 with code easter checkout
//           </p>
//           <svg
//             className="h-8 w-8 text-white"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </section>

//         {/* Main header */}
        // <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
        //   <h1 className="flex justify-center items-center text-black text-4xl h-10">
        //     Avion
        //   </h1>

        //   {/* Search Bar */}
        //   {isSearchBarOpen && (
        //     <div className="flex items-center bg-gray-100 border rounded-lg px-4 py-2 w-full max-w-md">
        //       <input
        //         type="text"
        //         value={searchQuery}
        //         onChange={(e) => setSearchQuery(e.target.value)}
        //         placeholder="Search products..."
        //         className="flex-grow bg-transparent outline-none text-black"
        //       />
        //       <button onClick={toggleSearchBar} className="text-gray-500 ml-2">
        //         <FaWindowClose />
        //       </button>
        //     </div>
        //   )}

        //   {/* Desktop and Mobile Menus */}
        //   <div
        //     id="collapseMenu"
        //     className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
        //   >
        //     <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        //       <li className="max-lg:border-b max-lg:py-3 px-3">
        //         <Link href="/" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
        //           Home
        //         </Link>
        //       </li>
        //       <li className="max-lg:border-b max-lg:py-3 px-3">
        //         <Link href="/products" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
        //           Products
        //         </Link>
        //       </li>
        //       <li className="max-lg:border-b max-lg:py-3 px-3">
        //         <Link href="/about" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
        //           About
        //         </Link>
        //       </li>
        //       <li className="max-lg:border-b max-lg:py-3 px-3">
        //         <Link href="/contact" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
        //           Contact
        //         </Link>
        //       </li>
        //       <li className="max-lg:py-3 px-3 text-right">
        //         <button
        //           onClick={toggleMenu}
        //           className="text-[#333] hover:text-[#2A254B]  font-bold"
        //         >
        //           <FaWindowClose className="md:hidden" />
        //         </button>
        //       </li>
        //     </ul>
        //   </div>

        //   {/* Mobile Menu Icon */}
        //   <div className="flex max-lg:ml-auto">
        //     <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
        //       <svg
        //         className="w-7 h-7"
        //         fill="#000"
        //         viewBox="0 0 20 20"
        //         xmlns="http://www.w3.org/2000/svg"
        //       >
        //         <path
        //           fillRule="evenodd"
        //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        //           clipRule="evenodd"
        //         ></path>
        //       </svg>
        //     </button>
        //   </div>

        //   {/* Icons (Search, Cart, User) */}
        //   <div className="flex items-center space-x-4">
        //     <button onClick={toggleSearchBar}>
        //       <FaSearch className="w-6 h-6 cursor-pointer" />
//             </button>
//             <Link href="/cart">
//               <FaShoppingCart className="text-2xl cursor-pointer mr-2 " />
//               </Link>
             
//             <Link href="/signIn">
//               <FaUserCircle className="w-6 h-6 cursor-pointer" />
//             </Link>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default FullHeader;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUserCircle, FaWindowClose } from "react-icons/fa";

const FullHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0); // Cart count state

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        try {
            const parsedCartItems = JSON.parse(storedCartItems);
            setCartCount(parsedCartItems.length);
        } catch (error) {
            console.error("Error parsing cartItems from localStorage:", error);
            setCartCount(0); // Handle parse error
        }
    } else {
        setCartCount(0);
    }

    // Storage event listener for cross-tab updates
    const handleStorageChange = () => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            try {
                const parsedCartItems = JSON.parse(storedCartItems);
                setCartCount(parsedCartItems.length);
            } catch (error) {
                console.error("Error parsing cartItems from localStorage:", error);
                setCartCount(0); // Handle parse error
            }
        } else {
            setCartCount(0);
            
        }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };

}, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <div>
      <header className="shadow-md font-sans tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
          <h1 className="flex justify-center items-center text-black text-4xl h-10">
            Avion
          </h1>

          {/* Search Bar */}
          {isSearchBarOpen && (
            <div className="flex items-center bg-gray-100 border rounded-lg px-4 py-2 w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-grow bg-transparent outline-none text-black"
              />
              <button onClick={toggleSearchBar} className="text-gray-500 ml-2">
                <FaWindowClose />
              </button>
            </div>
          )}

          {/* Desktop and Mobile Menus */}
          <div
            id="collapseMenu"
            className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/products" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
                  Products
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/about" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/contact" className="hover:text-[#2A254B] text-[#333] block font-bold text-[15px]">
                  Contact
                </Link>
              </li>
              <li className="max-lg:py-3 px-3 text-right">
                <button
                  onClick={toggleMenu}
                  className="text-[#333] hover:text-[#2A254B]  font-bold"
                >
                  <FaWindowClose className="md:hidden" />
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex max-lg:ml-auto">
            <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Icons (Search, Cart, User) */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearchBar}>
              <FaSearch className="w-6 h-6 cursor-pointer" />
              </button>

            <Link href="/cart" className="relative"> {/* relative for badge positioning */}
              <FaShoppingCart className="text-2xl cursor-pointer mr-2" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/signIn">
            <FaUserCircle className="w-6 h-6 cursor-pointer" />
          </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FullHeader;
