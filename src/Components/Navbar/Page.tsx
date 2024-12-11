"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../../public/assets/svg/Navbarlogo.svg';
import Link from 'next/link';
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-gradient-to-r  from-[#FAF1DF] to-[#E2F3EB] xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] '>
          <div className="flex w-full xs:flex-col py-4 xl:py-7 items-center justify-between">
      {/* Logo */}
      <div className="max-w-[30%] sm:min-w-[10%] xs:items-center xs:mb-3 flex justify-between xs:min-w-[100%]">
        <Link href="/">
        
        <Image src={logo} alt="Logo" className="md:w-2/3 sm:w-2/3" />
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="xs:block hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose size={24} className="text-[#898989]" />
            ) : (
              <AiOutlineMenu size={24} className="text-[#898989]" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`min-w-[70%] justify-end gap-6 xl:gap-14 lg:gap-10 xs:min-w-[100%] md:flex lg:flex xl:flex sm:flex items-center ${
          menuOpen ? 'block' : 'hidden'
        } md:block lg:block sm:block xl:block`}
      >
        <ul className="flex xs:flex-wrap items-center lg:gap-10 xl:gap-14 justify-between gap-6">
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
            Home
          </li>
          <Link href="/will">
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
          Will
          </li>
          </Link>
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
            <Link href="/lpa">
            
            LPA
            </Link>
          </li>
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
            Trusts
          </li>
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
            Calculators
          </li>
          <Link href="/legal">
        
          <li className="text-[#898989] font-inter font-semibold hover:text-black">
            Legal Services
          </li>
          </Link>
          
          <Link href="/signup"
          className='px-4 sm:px-3 md:px-3 md:py-1 sm:py-1 rounded-3xl py-3 bg-[#54BD95] font-inter text-white font-semibold'
          > Get Started
          </Link>
         
                    
         
        </ul>
      </div>
    </div>
    </div>
  
  );
};

export default Navbar;
