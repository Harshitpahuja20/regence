import React from 'react'
import Image from 'next/image'
import correct from "../../../public/assets/svg/Correct.svg"
import platform from "../../../public/assets/svg/Platform.svg"
import jhon from "../../../public/assets/svg/Jhon.svg"
import review from "../../../public/assets/svg/Review.svg"
import lock from "../../../public/assets/svg/lock.svg"
const Platform:React.FC = () => {
  return (
    <div className='xs:px-[3%]  sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-gradient-to-r from-[#ffffff] to-[#E9F6F1]'>
        <div className='w-full xs:gap-6 xs:flex-col py-12 xs:py-2 flex justify-between '>
            <div className='w-[50%] xs:w-full'>
                <h1 className='font-inter xl:text-[50px] py-4 lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] font-semibold text-[#191A15]'>Why You'll Love Our Platform</h1>
                <div className='flex flex-col gap-6'>
                <p className='flex  gap-4 items-center text-[18px] font-inter font-medium text-[#191A15]'><Image src={correct} alt="" />Create your will in just minutes.</p>
                <p className='flex  gap-4 items-center text-[18px] font-inter font-medium text-[#191A15]'><Image src={correct} alt="" />Clear, fixed pricing with no surprises.</p>
                <p className='flex  gap-4 items-center text-[18px] font-inter font-medium text-[#191A15]'><Image src={correct} alt="" />Reviewed by legal professionals for accuracy.</p>
                <p className='flex  gap-4 items-center text-[18px] font-inter font-medium text-[#191A15]'><Image src={correct} alt="" />Your data is encrypted and protected.</p>
                <p className='flex  gap-4 items-center text-[18px] font-inter font-medium text-[#191A15]'><Image src={correct} alt="" />Easily update your will as needed.</p>

                </div>
            </div>
            <div className='w-[50%] items-center xs:w-full  xs:justify-center flex justify-end'>
            <div className='relative xs:w-[80%]'>
          <Image src={platform} alt="" className='' />
          <Image src={jhon } alt="" className='absolute  sm:left-[-10%] sm:max-w-[50%] xs:left-[-10%] xs:max-w-[50%] top-[8%] left-[-29%]'/>
  <Image src={lock} alt="" className='absolute sm:max-w-[10%] xs:max-w-[10%] sm:left-[-4%] xs:left-[-6%]  bottom-[34%]  left-[-16%]'/>
  <Image src={review} alt="" className='absolute sm:max-w-[30%] sm:right-[-10%] xs:max-w-[40%] right-[-16%] bottom-[10%]'/>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Platform