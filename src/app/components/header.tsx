import React from 'react';
import Link from 'next/link';

// First Header Component
const FirstHeader = () => {
  return (
    <div className="flex items-center justify-between h-[45px] w-full bg-[#272343] px-4 md:px-[5%]">
      {/* Left Section: Free Shipping with Tick */}
      <div className="flex items-center space-x-2">
        {/* Tick Icon */}

      <img
        className="w-[16px] h-[16px]"
        src="/images/tick.png"
        alt="tick"
      />

        {/* Free Shipping Text */}
        <span className="text-white text-xs md:text-sm">
          Free Shipping On All Orders Over $50
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Language Selector */}
        <select className="bg-black text-white text-xs md:text-sm p-1 hover:text-gray-400">
          <option value="english">ENG</option>
        </select>

        {/* FAQs Link */}
        <span className="text-white text-xs md:text-sm cursor-pointer hover:text-gray-400">
          <Link href="/faq">FAQs</Link>
        </span>

        {/* Circle (Divider) */}
      <img
        className="hidden md:block w-[16px] h-[16px]"
        src="/images/circle.png"
        alt="divider"
      />


        {/* Need Help Link */}
        <span className="text-white text-xs md:text-sm cursor-pointer hover:text-gray-400">
          <Link href="/contactus">Need Help</Link>
        </span>
      </div>
    </div>
  );
};

export default FirstHeader;

// Middle Header Component
export const MiddleHeader = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#F0F2F3]">
        <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center">
          <a href='./' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* Logo */}
          <img 
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src="/images/logo.png"
            alt="logo"
          />

            <span className="ml-2 text-lg md:text-3xl">Comforty</span>
          </a>

          {/* Empty Navigation */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
          </nav>

          {/* Cart Button */}
          <button className="inline-flex items-center text-black bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-base">
            {/* Buy Icon */}
            

          <img
            className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] mr-2"
            src="/images/buy.png"
            alt="buy"
          />

            {/* Cart Text */}
            <span className="mr-1 md:mr-2">
              <Link href="/cart">Cart</Link>
            </span>
            {/* Number Icon */}
            <img
           className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
           src="/images/No.png"
           alt="number"
          />

          </button>
        </div>
      </header>
    </div>
  );
};

// Last Header Component
export const LastHeader = () => {
  return (
    <div>
      <header className="text-gray-600 body-font border-b">
        <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center">
          {/* Navigation Menu */}
          <ul className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <li className="mr-5 hover:text-gray-900">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-5 hover:text-gray-900">
              <Link href="/productpage">Shop</Link>
            </li>
            <li className="mr-5 hover:text-gray-900">
              <Link href="/singleproduct">Product</Link>
            </li>
            <li className="mr-5 hover:text-gray-900">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link href="/aboutus">About</Link>
            </li>
          </ul>

          {/* Logo */}
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl"></span>
          </a>

          {/* Contact Section */}
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-base">
              Contact:
              <span className="ml-2">(808) 555-0111</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
