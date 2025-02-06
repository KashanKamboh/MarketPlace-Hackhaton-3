// import React from "react";
// import About2 from "../components/About2"
// import FullHeader from "../components/FullHeader";
// import Header from "../components/Header";
// import About3 from "../components/About3";
// import { Hero2, Hero3 } from "../components/Hero";
// import Footer from "../components/Footer";

// const BrandBuilt = () => {
//   return (
//     <>
//       <FullHeader/>
//       <Header/>
//       <div className="h-[277px] w-[1440px]  flex justify-between mb-[50px]  items-center px-8 md:px-16 bg-gray-50">
//         {/* Left Text Section */}
//         <div className="text-lg md:text-4xl font-semibold text-gray-800 max-w-[700px]">
//           A brand built on the love of craftsmanship, <br/> quality, and outstanding customer service
//         </div>
        
//         {/* Right Button Section */}
//         <div >
//           <button className="px-6 py-3 bg-[#2A254B] mr-[80px] text-white rounded-lg font-medium hover:bg-gray-900 transition-all">
//             View Our Product
//           </button>
//         </div>
//       </div>

//       <About2/>
//       <About3/>
//       < Hero2 />
//       <Hero3/>
//       <Footer/>
//     </>
//   );
// };

// export default BrandBuilt;
/* eslint-disable @next/next/no-img-element */
import React from "react";


import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";

import Link from "next/link";

const About = () => {
  return (
    <div>
    {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <Link href="/AllProduct"><button className="bg-[#2A254B] h-12 w-40 rounded-sm text-white">
            View our products
          </button>
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-custom-purple w-full md:w-2/5 text-gray-800 p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-[#2A254B] h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/images/Image.png"
            alt="About main"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/images/image2.png"
          alt="Service"
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-[#2A254B] h-12 w-40 rounded-sm mt-10 text-white">
            <Link href="/contact">
            Get in Touch</Link>
            </button>
            
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 font-[sans-serif]">
      {/* Title */}
      <h2 className="text-[#2A254B] text-2xl lg:text-3xl font-normal text-center mb-12">
        What makes our brand different
      </h2>

      {/* Grid Container */}
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {/* Feature 1 */}
        <div className="text-center lg:text-left max-w-xs">
          <TbTruckDelivery className="w-10 h-10 text-[#2A254B] mb-6 mx-auto lg:mx-0" />
          <h3 className="text-gray-800 text-lg font-medium mb-3">
            Next day as standard
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center lg:text-left max-w-xs">
          <IoCheckmarkCircleOutline className="w-10 h-10 text-[#2A254B] mb-6 mx-auto lg:mx-0" />
          <h3 className="text-gray-800 text-lg font-medium mb-3">
            Made by true artisans
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center lg:text-left max-w-xs">
          <BiPurchaseTag className="w-10 h-10 text-[#2A254B] mb-6 mx-auto lg:mx-0" />
          <h3 className="text-gray-800 text-lg font-medium mb-3">
            Unbeatable prices
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            For our materials and quality, you won’t find better prices
            anywhere.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center lg:text-left max-w-xs">
          <LuSprout className="w-10 h-10 text-[#2A254B] mb-6 mx-auto lg:mx-0" />
          <h3 className="text-gray-800 text-lg font-medium mb-3">
            Recycled packaging
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B] h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default About;