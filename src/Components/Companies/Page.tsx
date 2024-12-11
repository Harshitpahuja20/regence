import React from 'react'
import Image from "next/image";
import img1 from "../../../public/assets/svg/unsplash.svg"
import img2 from "../../../public/assets/svg/Notion.svg"
import img3 from "../../../public/assets/svg/Intercome.svg"
import img4 from "../../../public/assets/svg/deiscript.svg"
import img5 from "../../../public/assets/svg/Grammer.svg"
const Companies: React.FC = () => {
  return (
    <div  className='xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-[#238662] '>
    <div className=' '>
        <div className='xl:py-[8rem] py-[5rem] xs:py-4'>
            <h1 className='xl:text-[45px] flex justify-center text-center text-white lg:text-[40px] md:text-[40px] sm:text-[35px] xs:text-[30px] font-inter font-bold '>Over 10,000 Families Protected.</h1>
            <p className='font-inter pb-[0.5%] pt-[3%] font-normal flex justify-center text-[#BFE5D7]'>As seen on</p>
            <div className='flex gap-12 xs:flex-wrap flex-wrap  justify-center'>
                <p className='flex text-[25px] gap-4 items-center font-inter text-white font-medium'><Image src={img1} alt="" /> Unsplash</p>
                <p className='flex text-[25px] gap-4 items-center font-inter text-white font-medium'><Image src={img2} alt="" />Notion</p>

                <p className='flex text-[25px] gap-4 items-center font-inter text-white font-medium'><Image src={img3} alt="" />INTERCOM</p>

                <p className='flex text-[25px] gap-4 items-center font-inter text-white font-medium'><Image src={img4} alt="" />descript</p>

                <p className='flex text-[25px] gap-4 items-center font-inter text-white font-medium'><Image src={img5} alt="" /> Unsplash</p>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Companies