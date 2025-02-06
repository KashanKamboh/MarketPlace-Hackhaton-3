// import React from "react";
// import { IoSendOutline } from "react-icons/io5";
// import Image from "next/image";
// import { LuFacebook } from "react-icons/lu";
// import { FiTwitter } from "react-icons/fi";
// import { IoLogoInstagram } from "react-icons/io5";
// import { FiLinkedin } from "react-icons/fi";
// import { FaSkype } from "react-icons/fa";
// import { AiOutlinePinterest } from "react-icons/ai";







// const Footer =()=>{
//     return(
//         <div className="w-[1345px] h-[400px] pt-[50px]  gap-[100px] p-[20px] bg-[#2A254B]">
//             <div className="border-b-[0.5px] border-[#b6b4c0] flex gap-[100px] ml-[20px] ">
//             <div>
//             <h2 className='  h-[20px] text-[24px] w-[43px]  mb-9 font-inter font-[400] text-[#FAFAFA] 3%'>Menu</h2>
//             <p className="w-[90px] h-[22px] font-Poppins mb-5  font-normal text-[16px] text-[#FAFAFA]">New Arrival</p>
//             <p className="font-Poppins text-[16px] mb-4 font-normal w-[90px] text-[#FAFAFA] h-[19px]">Best Sellers</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[120px] text-[#FAFAFA] h-[19px]">Recently viewed</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[128px] text-[#FAFAFA] h-[19px]">Popular this week</p>
//             <p className="font-Poppins text-[16px] mb-5 font-normal w-[84px] text-[#FAFAFA] h-[19px]">All products</p>
            
//             </div>
            
//             <div>
//             <h2 className='  h-[20px] text-[24px] w-[84px]  mb-9 font-inter font-[400] text-[#FAFAFA] 3%'>Categories</h2>
//             <p className="w-[56px] h-[19px] font-Poppins mb-5  font-normal text-[16px] text-[#FAFAFA]">Crockery</p>
//             <p className="font-Poppins text-[16px] mb-4 font-normal w-[67px] text-[#FAFAFA] h-[19px]">Furniture</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[62px] text-[#FAFAFA] h-[19px]">Homeware</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[72px] text-[#FAFAFA] h-[19px]">Plant pots</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[40px] text-[#FAFAFA] h-[19px]">Chairs</p>
//             <p className="font-Poppins text-[16px] mb-5 font-normal w-[56px] text-[#FAFAFA] h-[19px]">Crockrey</p>
//            </div>
//            <div>
//             <h2 className='h-[20px] text-[24px] w-[150px]  mb-9 font-inter font-[400] text-[#FAFAFA] 3%'>Our Company</h2>
//             <p className="w-[55px] h-[22px] font-Poppins mb-5  font-normal text-[16px] text-[#FAFAFA]">About</p>
//             <p className="font-Poppins text-[16px] mb-4 font-normal w-[62px] text-[#FAFAFA] h-[19px]">Vacancies</p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[80px] text-[#FAFAFA] h-[19px]">Contact Us </p>
//             <p className="font-Poppins text-[16px] mb-5  font-normal w-[44px] text-[#FAFAFA] h-[19px]">Privacy</p>
//             <p className="font-Poppins text-[16px] mb-5 font-normal w-[87px] text-[#FAFAFA] h-[19px]">Return policy</p>
            
//            </div>
            
//            <div>
//            <h2 className='  h-[20px] text-[24px] w-[220px]  mb-9 font-inter font-[400] text-[#FAFAFA] 3%'>Join Our meeting list</h2>
//            <div className="flex gap-1 ">
//            <input type='text' placeholder='your@email.com'
//               className="w-[509px] h-[56px] bg-[#514d69]  py-3 px-6 text-sm  focus:bg-transparent focus:outline-blue-600" />
//               <button className="w-[100px] h-[60px] bg-white hover:bg-red-500 transition-0.5 ">SignUp</button>
//              </div>
//              </div>
//              </div>

                
//              <div className="   mt-[8px]  text-[#fafafa] ">
//              <p className=" flex ml-[20px] w-[180px] pt-[14px] h-[19px] font-[400] text-[14px]">Copyright 2022 Avion LTD</p>
//              <div className="flex gap-[19px] ml-[980px] ">
//             <LuFacebook  className="w-[24px] h-[24px]"/>
//             <FiTwitter  className="w-[24px] h-[24px]"/>
//             <IoLogoInstagram  className="w-[24px] h-[24px]"/>
//             <FiLinkedin  className="w-[24px] h-[24px]"/>
//             <FaSkype className="w-[24px] h-[24px]"/>
//             <AiOutlinePinterest className="w-[24px] h-[24px]" />
//             </div>


//             </div>
            
//              </div>
//         )
// }
// export default Footer

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1><Link href='/about'>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                <Link href="/signIn">
                Sign up
                </Link>
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'https://www.linkedin.com/in/kashaf-tariq-1400072b6/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;