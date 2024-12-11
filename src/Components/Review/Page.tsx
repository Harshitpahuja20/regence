import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/svg/Quotes.svg"
import img2 from "../../../public/Images/Firstimg.svg"
import img3 from "../../../public/Images/Second.svg"
import img4 from "../../../public/Images/Third.svg"
import img5 from "../../../public/Images/Fourth.svg"
import img6 from "../../../public/Images/Fifth.svg"
import contact from "../../../public/assets/svg/Contact.svg"
const Page:React.FC = () => {
  return (
    <div className='xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-[#242D3E]'>
      <div className='w-full py-10 xl:py-[10%] xs:flex-col flex justify-between'>
<div className='w-1/2 xs:w-full max-w-[500px]'>
<h1 className='xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] font-inter font-semibold text-white'>What Our <br  className='hidden lg:flex xl:flex '/> Customers Say <Image src={img} alt="" className="pt-4"/>  </h1>
<p className="max-w-[80%] font-inter text-[#A6A6A6] text-[18px] font-medium py-10">
I was overwhelmed with the thought of creating my will, but this platform made it so easy and stress-free. The step-by-step process was clear, and I appreciated the legal review that gave me confidence everything was in order. I now have peace of mind knowing my will is securely stored and can be updated whenever needed. Highly recommend it!
</p>

<div>
  <p className='text-white font-inter'>_ Sarah Mitchell</p>
  <span className=' max-w-[80%] xs:flex-wrap xs:w-full py-6 flex justify-between gap-3'>
    <Image src={img2} alt="Sarah Mitchell" className='rounded-full w-[60px] h-[60px] object-cover' />
    <Image src={img3} alt="Sarah Mitchell" className='rounded-full w-[60px] h-[60px] object-cover ml-[10px]' />
    <Image src={img4} alt="Sarah Mitchell" className='rounded-full w-[60px] h-[60px] object-cover ml-[10px]' />
    <Image src={img5} alt="Sarah Mitchell" className='rounded-full w-[60px] h-[60px] object-cover ml-[10px]' />
    <Image src={img6} alt="Sarah Mitchell" className='rounded-full w-[60px] h-[60px] object-cover ml-[10px]' />

  </span>
</div>
</div>
<div className='w-1/2  xs:w-full flex justify-end'>
<div className='bg-[#222938] max-w-[670px]  p-6'>
<div className='flex flex-col  justify-center items-center'>
<Image src={contact} alt="" className='' />
  <h1 className='text-[30px] w-full justify-center text-center flex  font-inter text-white'>Need Assistance? Send Us a  <br  className='xl:flex hidden lg:flex'/>
  Message!</h1>
</div>
 
<form action="" >
<div className='w-full'>
                        <label htmlFor="email" className="block text-white py-4 font-inter">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 w-full ps-4 font-inter text-[#A6A6A6] font-medium rounded-lg py-2 border-2"
                        />
                    </div>
                    <div className='w-full '>
    <label htmlFor="note" className="block text-white py-4 font-inter">
        Message
    </label>
    <textarea
        id="note"
        placeholder="Write a note..."
        className="mt-2 w-full ps-4 font-inter text-[#A6A6A6] font-medium rounded-lg py-2 border-2 resize-none"
        
    ></textarea>
</div>
<button className='bg-[#54BD95] mt-6 w-full py-4 text-white font-inter rounded-lg  font-semibold'>Send</button>
</form>
</div>
</div>
      </div>
    </div>
  )
}

export default Page