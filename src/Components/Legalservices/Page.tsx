import React from 'react'
import Hero from "../CommonFile/Page";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../../public/assets/svg/lessonimg1.svg"
import img2 from "../../../public/assets/svg/robot.svg"
import img from "../../../public/assets/svg/Highlish.svg"
import img3 from "../../../public/assets/svg/track.svg"
import mainImage from "../../../public/assets/svg/legarimage.svg";
import vector1 from "../../../public/assets/svg/15minutes.svg";
import vector2 from "../../../public/assets/svg/Safety.svg";
import vector3 from "../../../public/assets/svg/tick.svg";
import vector4 from "../../../public/assets/svg/Expert.svg";
import musicIcon from "../../../public/assets/svg/Music.svg";
import star from "../../../public/assets/svg/star.svg"
import que from "../../../public/assets/svg/question.svg"
import person from "../../../public/assets/svg/Person.svg"
import doc from "../../../public/assets/svg/doc.svg"
import Image from 'next/image';
import Plans from '../Plans/Page';
import  Feedback from "../Feedback/Page"
import FAQ from "../FAQ/Page"
const Page:React.FC = () => {
    const decorationImages = [
        { src: vector1, alt: "Protect Your Icon", styles: "xs:max-w-[50%] sm:left-[-10%] sm:max-w-[35%] absolute top-[33%] left-[-22%]" },
        { src: vector2, alt: "Safety Icon", styles: "absolute xs:max-w-[20%] sm:max-w-[12%] left-[-9%] bottom-[10%]" },
        { src: vector3, alt: "Tick Icon", styles: "absolute xs:max-w-[20%] sm:max-w-[10%] top-[6%] right-[6%]" },
        { src: vector4, alt: "Legally Icon", styles: "absolute sm:right-[-8%] sm:max-w-[30%] xs:max-w-[40%] right-[-16%] bottom-[10%]" },
      ];
  return (
    <>
     <div>
  <Hero
    title={
      <>
Expert Legal <br className='xl:block hidden lg:block'/> Guidance, Simplified.      </>
    } 
         subtitle
    ={<>
Tailored solutions to address your legal needs, <br className='xl:block lg:block hidden'/> ensuring peace of mind.    </>
    }
    
      buttonText="Speak to an Expert"
      buttonLink=""
      secondaryButtonText=" "
      secondaryIcon=""
      mainImage={mainImage}
      decorationImages={decorationImages}
    />

    </div>
   <div className="xs:px-[3%] xl:pt-[5rem] py-6 xl:pb-[0rem] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-gradient-to-r from-[#FFFFFF] to-[#F4FBF8]">
        <div className='relative'>
            <h1 className='text-[35px] font-semibold font-publicSans'>Service Highlights</h1>
            <Image src={img} alt=""  className='absolute left-[12%] '/>
            <p className='text-[#737373] text-[16px] pt-5 font-publicSans'>Key benefits and features tailored to simplify and enhance your legal experience.</p>
        </div>
        <div className='w-full py-10 xs:flex-col xs:items-center xs:gap-6 lg:gap-10 xl:gap-10 md:gap-8 sm:gap-6 flex justify-between'>
            <div className='w-[33%]   xs:w-[90%]   p-6  flex flex-col justify-between  shadow-md rounded-sm'>
                <div>
                <h1 className='font-inter sm:flex-col xs:flex-col font-semibold text-[20px] items-center flex gap-4'><Image src={img1} alt="" className='w-8 h-8' /> Will preparation</h1>
                <p className='py-6 text-[#6D737A] font-publicSans '>Easily create a valid will to protect your wishes and loved ones.
                </p>
                </div>
           
             <button
              className="text-white bg-[#54BD95]   max-w-[42px]  text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
            <div className='w-[33%] xs:w-[90%]  p-6 border flex flex-col justify-between  shadow-lg rounded-sm'>
                <div>
                <h1 className='font-publicSans sm:flex-col xs:flex-col font-semibold text-[20px] items-center flex gap-4'><Image src={img2} alt="" className='w-8 h-8' />Estate planning</h1>
             <p className='py-6 text-[#6D737A] font-publicSans '>Organize your assets and ensure your loved ones are cared for according to your wishes.
             </p>
                </div>
             
             <button
              className="text-white bg-[#54BD95]  max-w-[42px]   text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
            <div className='w-[33%] xs:w-[90%]  p-6 border  flex flex-col justify-between shadow-lg rounded-sm'>
                <div>
                    <h1 className='font-publicSans xs:flex-col sm:flex-col font-semibold text-[20px] items-center flex gap-4'><Image src={img3} alt="" className='w-8 h-8' />Executor guidance</h1>
                <p className='py-6 text-[#6D737A] font-publicSans '>Clear advice for managing legal duties, assets, and estate distribution.
                </p>
                </div>
             <button
              className="text-white bg-[#54BD95] max-w-[42px]  text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
        </div>
    </div>
    <div className='bg-[#54BD95] py-10 xs:px-[3%] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] '>
         <div className=' '>
     <div  className='w-full xs:flex-col flex gap-6 justify-between py-12'>
<div className='w-[50%] max-w-[700px] xs:w-full '>
<h1 className='xl:text-[50px] font-inter font-semibold text-white lg:text-[45px] md:text-[40px] sm:text-[40px] xs:text-[30px]'>Legal Services in <br className='xs:hidden block'/>
<span className='text-[#FFC728] '>3 Simple Steps</span>
</h1>
<p className=' text-[#B7E3D2]  max-w-[90%] py-6 text-[15px]'>Navigating legal matters doesn’t have to be overwhelming. With our streamlined process, we guide you through every step with ease. Whether you need advice on estate planning, will preparation, or legal documentation, our team of experienced professionals is here to assist.</p>

          <div className='flex xs:w-full xs:flex-wrap flex-wrap md:flex-col  sm:flex-col  justify-between'>
          <div className=' pt-4'>
            <div className=' pb-2 items-center flex gap-2'>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <p className='font-inter text-white  text-[20px] font-semibold'>4.9 <span className='font-normal'>/ 5 rating</span></p>
            </div> 
            <h3 className='font-semibold  font-inter text-[#B7E3D2]'>Trustpilot</h3>

          </div>
          <div className=' pt-4'>
            <div className=' pb-2 items-center flex gap-2'>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <Image src={star} alt="" />
            <p className='font-inter  text-white text-[20px] font-semibold'>4.9 <span className='font-normal'>/ 5 rating</span></p>
            </div> 
            <h3 className='font-semibold  font-inter text-[#B7E3D2]'>Google</h3>

          </div>
          </div>
          
</div>
<div className='w-[50%] xs:w-full flex justify-end'>

    <div className=' flex flex-col gap-12'>

        
        <div className='flex items-start'>
        <Image src={que} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-white text-[28px]'>Step 1: Answer a Few Questions</h1>
            <p className='font-medium font-inter text-[#B7E3D2] py-1 text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </p>
        </div>
           
        </div>
        <div className='flex items-start'>
        <Image src={person} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-white text-[28px]'>Step 2: Add Beneficiaries</h1>
            <p className='font-medium font-inter py-1 text-[#B7E3D2] text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </p>
        </div>
           
        </div>
        <div className='flex items-start'>
        <Image src={doc} alt="" />
        <div>
        <h1 className='font-semibold font-inter text-white text-[28px]'>Step 3: Store & Access Anytime</h1>
            <p className='font-medium font-inter py-1 text-[#B7E3D2] text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            </p>
        </div>
           
        </div>
        

    </div>
</div>

    </div>
    </div>
    </div>
<Feedback/>
<FAQ/>
    <Plans/>
    </>
   
  )
}

export default Page