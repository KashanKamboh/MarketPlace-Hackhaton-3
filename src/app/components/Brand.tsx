import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";
import React from "react";

const Brand = () => {
  return (
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
  );
};

export default Brand;
