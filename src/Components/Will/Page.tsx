import React from 'react'
import Image from 'next/image'
import star from "../../../public/assets/svg/star.svg"
import que from "../../../public/assets/svg/question.svg"
import person from "../../../public/assets/svg/Person.svg"
import doc from "../../../public/assets/svg/doc.svg"
const Will :React.FC = () => {
  return (
    <div className='bg-[#F9F8FE] py-10 xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] '>
         <div className=' '>
     <div  className='w-full xs:flex-col flex gap-6 justify-between py-12'>
<div className='w-[50%] max-w-[700px] xs:w-full '>
<h1 className='xl:text-[50px] font-inter font-semibold lg:text-[45px] md:text-[40px] sm:text-[40px] xs:text-[30px]'>Create Your Will in  <br className='xs:hidden block'/>
<span className='text-[#5CC09A] '>Just 4 Simple Steps</span>
</h1>
<p className=' text-[#A6A6A6]  max-w-[90%] py-6 text-[15px]'>Creating a will doesn't have to be complicated. With our streamlined process, you can secure your family's future in just four easy steps. From answering a few basic questions to securely storing your final document, we guide you every step of the way to ensure peace of mind for you and your loved ones.</p>
<button className="px-4  sm:px-3 md:px-3 md:py-1 sm:py-1 rounded-3xl py-3 bg-[#54BD95] font-inter text-white font-semibold">
            Get Started
          </button>
          <div className='flex xs:w-full xs:flex-wrap flex-wrap md:flex-col  sm:flex-col  justify-between'>
          <div className=' pt-4'>
            <div className=' pb-2 items-center flex gap-2'>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <p className='font-inter  text-[20px] font-semibold'>4.9 <span className='font-normal'>/ 5 rating</span></p>
            </div> 
            <h3 className='font-semibold  font-inter text-[#A6A6A6]'>Trustpilot</h3>

          </div>
          <div className=' pt-4'>
            <div className=' pb-2 items-center flex gap-2'>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <p className='font-inter  text-[20px] font-semibold'>4.9 <span className='font-normal'>/ 5 rating</span></p>
            </div> 
            <h3 className='font-semibold  font-inter text-[#A6A6A6]'>Trustpilot</h3>

          </div>
          </div>
          
</div>
<div className='w-[50%] xs:w-full flex justify-end'>

    <div className=' flex flex-col gap-12'>

        
        <div className='flex items-start'>
        <img src={que} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-[#191A15] text-[28px]'>Step 1: Answer a Few Questions</h1>
            <p className='font-medium font-inter py-1 text-[#A6A6A6] text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </p>
        </div>
           
        </div>
        <div className='flex items-start'>
        <img src={person} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-[#191A15] text-[28px]'>Step 2: Add Beneficiaries</h1>
            <p className='font-medium font-inter py-1 text-[#A6A6A6] text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </p>
        </div>
           
        </div>
        <div className='flex items-start'>
        <img src={doc} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-[#191A15] text-[28px]'>Step 3: Store & Access Anytime</h1>
            <p className='font-medium font-inter py-1 text-[#A6A6A6] text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            </p>
        </div>
           
        </div>
        

    </div>
</div>

    </div>
    </div>
    </div>
   
   
  )
}

export default Will