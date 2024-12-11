// import React from 'react';
// import Image from 'next/image';
// import tick from '../../../public/assets/svg/Correct.svg';

// const PlanCard = ({
//   title,
//   description,
//   price,
//   features,
//   buttonLabel,
//   buttonStyle,
//   cardStyle,
//   priceStyle,
//   highlight
// }) => {
//   return (
//     <div className={`max-w-[380px] ${highlight ? 'max-h-[680px]  ' : ' max-h-[600px]'}`}>
//       <div className={`w-full h-full shadow-md   rounded-lg p-6 text-center ${cardStyle}`}>
//         <h3 className={`text-xl font-bold font-inter ${highlight ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
//         <p className={`text-[18px] font-medium font-inter mt-3 ${highlight ? 'text-white' : 'text-[#A6A6A6]'}`}>{description}</p>
//         <div className="relative">
//           <span className={`absolute font-inter ${highlight ? 'text-white' : ''} left-[27%] top-0`}>£</span>
//           <p className={`text-[40px] xl:text-[50px] font-inter font-semibold mt-6 ${priceStyle}`}>{price}</p>
//         </div>
//         {highlight && (
//           <div className="flex justify-center py-2">
//             <p className="text-white rounded-xl w-1/2 px-2 py-2 font-inter bg-[#84DAB9] text-sm">Save £50 a year</p>
//           </div>
//         )}
//         <div className="mt-6 p-4 bg-[#F9FAFB] rounded-xl">
//           <ul className="flex flex-col gap-4">
//             {features.map((feature, index) => (
              
//               <li 
//               key={index} 
//               className={`flex items-center font-inter gap-4 ${
//                 highlight ? 'text-black' : 'text-gray-800'
//               }`}
//             >                <Image src={tick} alt="tick" />
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           <button className={`mt-6 w-full shadow-lg font-inter py-3 px-4 rounded-2xl ${buttonStyle}`}>
//             {buttonLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Plans = () => {
//   const planData = [
//     {
//       title: 'Basic',
//       description: 'A simple solution for creating and storing your will securely.',
//       price: '99.99',
//       features: ['Secure Wills', 'Legal Review', 'Easy Updates', 'Chat Support', 'Digital Storage'],
//       buttonLabel: 'Signup for basic',
//       buttonStyle: 'bg-white text-green-500',
//       cardStyle: 'bg-white',
//       priceStyle: 'text-gray-800',
//       highlight: false,
//     },
//     {
//       title: 'Premium',
//       description: 'Includes all Basic features plus legal review and priority support.',
//       price: '199.99',
//       features: ['Secure Wills', 'Legal Review', 'Easy Updates', 'Chat Support', 'Digital Storage'],
//       buttonLabel: 'Go to pro',
//       buttonStyle: 'bg-[#54BD95] text-white',
//       cardStyle: 'bg-[#54BD95] text-white',
//       priceStyle: 'text-white',
//       highlight: true,
//     },
//     {
//       title: 'Pro',
//       description: 'All features, including advanced asset tracking and family management.',
//       price: '299.99',
//       features: ['All the features of pro plan', 'Secure Wills', 'Easy Updates', 'Co-conception program', 'Digital Storage'],
//       buttonLabel: 'Goto Business',
//       buttonStyle: 'bg-white text-green-500',
//       cardStyle: 'bg-white',
//       priceStyle: 'text-[#191A15]',
//       highlight: false,
//     },
//   ];

//   return (
//     <div className="xs:px-[3%] pt-6 sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-gradient-to-r from-[#ffffff] to-[#E9F6F1]">
//       <div className="w-full py-10">
//         <h1 className="text-center text-[#191A15] font-inter font-bold xl:text-[50px] md:text-[40px] lg:text-[45px] sm:text-[35px] xs:text-[30px]">
//           Choose Plan <br /> That’s Right For You
//         </h1>
//         <p className="font-inter text-center py-8 font-bold text-[#A6A6A6]">
//           Choose plan that works best for you, feel free to contact us
//         </p>
//         <div className="flex w-full py-4 justify-center rounded-lg">
//           <div className="flex gap-6 shadow-md bg-white py-2 rounded-lg px-4">
//             <button className="px-4 py-2 text-black bg-white font-inter font-medium border border-transparent rounded-md focus:outline-none">
//               Bi Monthly
//             </button>
//             <button className="px-4 py-2 text-white bg-[#54BE96] font-inter font-medium rounded-md focus:outline-none">
//               Bi Yearly
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-between gap-6 mt-12">
//   {planData.map((plan, index) => (
//     <PlanCard
//       key={index}
//       {...plan}
//       cardStyle={`${index === 1 ? 'mt-[-13px] bg-[#54BD95] pb-[30px]' : 'bg-white'}`} // Apply negative margin-top to the second card
//     />
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };

// export default Plans;

import React from 'react'
import Image from 'next/image'
import tick from "../../../public/assets/svg/Correct.svg"
const Plans:React.FC = () => {
  return (
    <div className='xs:px-[3%]  pt-6 sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%]  bg-gradient-to-r from-[#ffffff] to-[#E9F6F1]'>
        <div className='w-full py-10 '>
<h1 className='text-center text-[#191A15] font-inter font-bold xl:text-[50px] md:text-[40px] lg:text-[45px] sm:text-[35px] xs:text-[30px]'>Choose Plan <br />
That’s Right For You</h1>
<p className='font-inter text-center py-8 font-bold text-[#A6A6A6]'>Choose plan that works best for you, feel free to contact us</p>
<div className="flex w-full py-4 justify-center  rounded-lg">
    <div className=' flex gap-6 shadow-md bg-white py-2 rounded-lg  px-4'>
        <div>
        <button className="px-4 py-2 text-black bg-white font-inter font-medium border border-transparent rounded-md focus:outline-none">
    Bi Monthly
  </button>
        </div>
  
<div>
<button className="px-4 py-2 text-white bg-[#54BE96] font-inter font-medium rounded-md focus:outline-none">
    Bi Yearly
  </button>
</div>
 
    </div>
 
</div>
<div className="flex   max-w-full mt-12  ">
      <div className="flex   xs:flex-col  sm:items-center justify-between gap-6 w-full ">

        {/* Basic Plan */}
        <div className='max-w-[380px] py-4 max-h-[600px]'>
        <div className="bg-white w-full h-full  shadow-md rounded-lg pt-4 xs:pt-0 p-4 pb-0 text-center">
          <h3 className="text-xl font-inter font-bold text-gray-800">Basic</h3>
          <p className="text-[18px] font-medium font-inter text-[#A6A6A6] mt-3">A simple solution for creating and storing your will securely.</p>
          <div className='relative'>
       <span className='absolute font-inter left-[30%] top-0'>£</span>
          <p className="text-[40px] xl:text-[50px] font-inter justify-center font-semibold text-gray-800 mt-6 sm:mt-2 xs:mt-2  ">99.99</p>
          </div>
         <div className='bg-[#F9FAFB] mt-6 sm:mt-2 xs:mt-2 flex  flex-col p-4'>
         <ul className="    flex  flex-col gap-4">
            <li className="flex items-center  sm:text-[14px]font-inter gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center  sm:text-[14px] font-inter  gap-4"><Image src={tick} alt="" />Legal Review</li>
            <li className="flex items-center  sm:text-[14px] font-inter  gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center  sm:text-[14px] font-inter  gap-4"><Image src={tick} alt="" /> Chat Support</li>
            <li className="flex items-center  sm:text-[14px] font-inter  gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6 sm:text-[14px] sm:mt-2 xs:mt-2 text-green-500 w-full shadow-lg font-inter py-3 px-4 rounded-2xl bg-white">
          Signup for basic
          </button>
         </div>
         
        </div>
        </div>
      

        {/* Premium Plan */}
        <div className='max-w-[380px] max-h-[692px] min-h-[610px]  '>
        <div className="bg-[#54BD95] w-full h-full pt-4 xs:pt-0 shadow-md rounded-lg p-4  text-center">
          <h3 className="text-xl font-bold font-inter text-white">Premium</h3>
          <p className="text-[18px] font-medium font-inter text-white mt-3">Includes all Basic features plus legal review and priority support.</p>
          <div className='relative'>
          <span className='absolute font-inter text-white left-[27%] top-0'>£</span>
          <p className="text-[40px] xl:text-[50px] font-inter text-white justify-center font-semibold   mt-6 sm:mt-2 xs:mt-2  ">199.99</p>
          </div>
          <div className='flex  justify-center  py-2'>
          <p className="text-green-600 rounded-xl w-1/2 px-2  py-2 font-inter bg-[#84DAB9] text-sm">Save £50 a year</p>

          </div>
          <div className='bg-[#F9FAFB]    p-4  rounded-xl mt-2'>
          <ul className="    flex  flex-col gap-4">
            <li className="flex items-center  sm:text-[14px] font-inter gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center  sm:text-[14px] font-inter gap-4"><Image src={tick} alt="" /> Legal Review</li>
            <li className="flex items-center  sm:text-[14px] font-inter gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center  sm:text-[14px]font-inter  gap-4"><Image src={tick} alt="" /> Chat Support</li>
            <li className="flex items-center  sm:text-[14px]font-inter  gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6  sm:text-[14px] sm:mt-2 xs:mt-2 bg-[#54BD95] w-full shadow-lg font-inter py-3 px-4 rounded-2xl text-white">            Go to pro
          </button>
          </div>
         
        </div>
        </div>
       

        <div className='max-w-[380px] py-4  max-h-[600px]  '>
        <div className="bg-white w-full h-full  shadow-md rounded-lg p-4 pt-4 xs:pt-0  text-center">
          <h3 className="text-xl font-inter font-bold text-gray-800">Pro</h3>
          <p className="text-[18px] font-medium font-inter text-[#A6A6A6] mt-3">All features, including advanced asset tracking and family management.</p>
          <div className='relative'>
       <span className='absolute font-inter left-[27%]  top-0'>£</span>
          <p className="text-[40px] xl:text-[50px] font-inter justify-center font-semibold text-[#191A15] mt-6 sm:mt-2 xs:mt-2  ">299.99</p>
          </div>
           <div className='mt-6 sm:mt-2 xs:mt-2 p-4 bg-[#F9FAFB]'>
          <ul className="   flex  flex-col gap-4">
            <li className="flex items-center  sm:text-[14px]  font-inter gap-4"><Image src={tick} alt="" /> All the features of pro plan</li>
            <li className="flex items-center  sm:text-[14px]font-inter gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center  sm:text-[14px] font-inter gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center  sm:text-[14px]font-inter gap-4"><Image src={tick} alt="" /> Co-conception program</li>
            <li className="flex items-center  sm:text-[14px]font-inter gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6 sm:text-[14px] sm:mt-2 xs:mt-2 text-green-500 w-full shadow-lg font-inter py-3 px-4 rounded-2xl bg-white">
            Goto Business
          </button>
          </div>
         
        </div>
</div>
        {/* Pro Plan */}
       
      </div>
    </div>
        </div>
    </div>
  )
}

export default Plans


