import React from 'react'
import Image from 'next/image';
import logo2 from '../../../public/assets/svg/Logo2.svg';
import img from '../../../public/assets/svg/Footer.svg'
const Page:React.FC = () => {
  return (
    <div className='xs:px-[3%] bg-[#161C28] xl:py-12 xl:pt-[5rem] py-10 xl:pb-[0rem] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%]  '>
        <div className='w-full xs:flex-wrap  xs:gap-4 flex justify-between'>
            <div className='max-w-[40%] flex flex-col gap-6'>
<Image src={logo2} alt="" />
<p className='text-[18px] font-inter text-[#A6A6A6] font-medium'>Secure Your Legacy, Today</p>
<div className='w-full '>
                        <span className='relative'>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 bg-transparent ps-4 font-inter border-[#A6A6A6] text-[#A6A6A6] font-medium rounded-3xl py-3 border-2"
                         
                        />
                        <Image src={img} alt="" className='absolute right-[5px] bottom-[-14px]'/>
                        
                        </span>
                    </div>
            </div>
            
            <div className='w-[20%] xs:flex  xs:w-full'>
                <div className='flex  w-full pt-8 flex-col gap-4'>
                <p className='text-white font-inter font-medium'>Solutions</p>
                <span className='text-[#A6A6A6]'>How It Works</span>

                <span className='text-[#A6A6A6]'>Pricing Plans</span>
                <span className='text-[#A6A6A6]'>Create Your Will</span>
                <span className='text-[#A6A6A6]'>Security </span>
                </div>
            
            </div>
            <div className='w-[20%] xs:w-full'>
                <div className='flex  w-full pt-8 flex-col gap-4'>
                <p className='text-white font-inter font-medium'>Help & Support</p>
                <span className='text-[#A6A6A6]'>FAQs</span>
                <span className='text-[#A6A6A6]'>Contact Us</span>
                <span className='text-[#A6A6A6]'>Legal Resources</span>
                <span className='text-[#A6A6A6]'>User Guide </span>
                </div>
            </div>
            <div className='w-[20%] xs:w-full content-center'>
                <div className='flex   pt-8 flex-col gap-4'>
                <p className='text-white font-inter font-medium'>Product</p>

                <span className='text-[#A6A6A6]'>Will</span>
                <span className='text-[#A6A6A6]'>LPA</span>
                <span className='text-[#A6A6A6]'>Trusts</span>
                <span className='text-[#A6A6A6]'>Calculators </span>
                </div>
            </div>
        </div>

        <div className="w-full py-6 flex justify-between">

    <h1 className='text-white '>© 2024 Regency Inc. Copyright and rights reserved</h1>
    <p className='text-white flex items-center gap-3'>Terms and Condtions <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#A6A6A6"/>
</svg>
 Privacy Policy</p>
        </div>
    </div>
  )
}

export default Page