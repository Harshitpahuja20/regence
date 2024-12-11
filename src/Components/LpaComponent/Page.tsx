import React from 'react'
import Image from 'next/image'
import correct from "../../../public/assets/svg/Correct.svg"
import lpaimg from "../../../public/assets/svg/Lpa.svg"
import { CiCircleCheck } from "react-icons/ci";
import img from "../../../public/assets/svg/15minutes.svg"
import review from "../../../public/assets/svg/Expert.svg"
import lock from "../../../public/assets/svg/Safety.svg"
import Companies from '../Companies/Page';
import Plans from '../Plans/Page';
import Link from 'next/link';
const Will :React.FC = () => {
  return (
    <>
  
    <div className='bg-[#F9F8FE] py-10 xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-gradient-to-r  from-[#FAF1DF] to-[#E2F3EB]  '>
         <div className=' '>
        <div className='w-full xs:gap-6 xs:flex-col py-12 xs:py-2 flex justify-between '>
            <div className='w-[50%] xs:w-full'>
                <h1 className='font-inter xl:text-[64px] py-4 lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] font-bold text-[#191A15]'>Lasting Power of Attorney Made Easy</h1>
                <div className='flex flex-col gap-6'>
                <p className='flex  gap-2 items-center text-[18px] font-inter font-medium text-[#191A15]'> <CiCircleCheck  className='w-[20px] h-[20px]'/>Make it truly your own with ease.</p>
                <p className='flex  gap-2 items-center text-[18px] font-inter font-medium text-[#191A15]'><CiCircleCheck  className='w-[20px] h-[20px]'/>Complete in just 15 minutes.</p>
               
                <p className='flex  gap-2 items-center text-[18px] font-inter font-medium text-[#191A15]'><CiCircleCheck  className='w-[20px] h-[20px]'/>Backed by expert guidance.</p>
                <p className='flex  gap-2 items-center text-[18px] font-inter font-medium text-[#191A15]'><CiCircleCheck  className='w-[20px] h-[20px]'/>Starting at just £90.</p>
                </div>
                <div className='mt-6'>
                <Link 
  href="/lpaque" 
  className="px-6 py-3 rounded-3xl bg-[#54BD95] text-white font-inter inline-block text-center"
>
  Let's get started
</Link>

                </div>
            </div>
            <div className='w-[50%] items-center xs:w-full  xs:justify-center flex justify-end'>
            <div className='relative xs:w-[80%]'>
          <Image src={lpaimg} alt="" className='' />
          <Image src={img} alt="" className='absolute  sm:left-[-10%] sm:max-w-[50%] xs:left-[-10%] xs:max-w-[50%] top-[14%] left-[-29%]'/>
  <Image src={lock} alt="" className='absolute sm:max-w-[10%] xs:max-w-[10%] sm:left-[-1%] xs:left-[-6%]  bottom-[20%]  left-[-16%]'/>
  <Image src={review} alt="" className='absolute sm:max-w-[30%] sm:right-[-10%] xs:max-w-[40%] right-[-16%] bottom-[10%]'/>
          </div>
            </div>
        </div>
    </div>
   
    </div>
    <Companies/>
    <Plans/>
    </>
  )
}

export default Will