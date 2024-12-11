import Image from 'next/image';
import React, { useState } from 'react';
import arrow from '../../../public/assets/svg/Arrow.svg';
import { IoIosArrowForward } from "react-icons/io";
import will from "../../../public/assets/svg/Will.svg"
import calculator from "../../../public/assets/svg/calculator.svg"
const Page: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Step to track the current visible section
  const [selectedOption, setSelectedOption] = useState<string | null>(null);



  type Option = {
    id: string;
    label: string;
    title?: string;
    icon?: string; 
    description?: string; 

  };

  const options: Option[] = [
    { id: 'single', label: 'Single' },
    { id: 'singleWithPartner', label: 'Single with Partner' },
    { id: 'married', label: 'Married' },
    { id: 'marriedWithBlendedFamily', label: 'Married with Blended Family' },
  ];

  const secondaryOptions: Option[] =[
    { id: '35', label: 'Under 35' },
    { id: '35-44', label: '35-44' },
    { id:'45-54', label: '45-54' },
    { id:'55-64', label: '55-64' },
    { id: '65 or older', label: '65 or older' },
 
  ]

  const  thirdOption: Option[] =[
    { id:"yes",label: 'Yes' },
    { id:"no",label: 'No' },
  ]

  const assets:Option[]=[
    { id:"Less than £325k", label: 'Less than £325k' },
    { id:"£325k to £650k", label: '£325k to £650k' },
    { id:"More than £650k", label: 'More than £650k' },
  ]
 
  
  const tailored:Option[] =[
    {
      id: "create-will",
      label: "Create Your Will",
      description: "Secure Your Wishes Today",
      icon:will, 
    },
    {
      id: "net-asset-calculator",
      label: "Use Net Asset Calculator",
      description: "Estimate Your Net Worth in Minutes",
      icon: calculator, 
    },
  ];
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && selectedOption) {
      setStep((prevStep) => prevStep + 1); // Go to the next step
    }
  };

  return (
    <div className="flex py-6 xs:px-4 justify-center items-center w-full  bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
      {step === 1 && (
        
          <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        
            <h1 className="flex gap-2 text-[20px] font-inter font-medium">
              <Image src={arrow} alt="" /> Back
            </h1>
            <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
            Answer 4 simple questions to create your personalized will.
            </p>
            <div className="w-full flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)} // Set step to 2 when clicked
                className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-4 px-6 rounded-full"
              >
                Let's get started
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        <div className="flex justify-between">
            <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
                <Image src={arrow} alt="" /> Back
              </h1>
              <h3 className="text-[20px] font-inter font-medium">Question {step - 1} of 4</h3>
              </div>

              <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
              What is your current relationship status?
            </p>
            <div className=" flex  flex-col gap-4">
              {options.map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center px-4 gap-3 py-4 rounded-lg border ${
                    selectedOption === option.id
                      ? 'bg-green-50 border-green-300'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-green-400`}
                >
                  <input
                    type="radio"
                    name="status"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    className="w-5 h-5 text-green-600 bg-green-600 focus:ring-green-500"
                  />
                  <span className="text-[16px] font-inter font-medium">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        <div className="flex justify-between">
            <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
               <Image src={arrow} alt="" /> Back
             </h1>
             <h3 className="text-[20px] font-inter font-medium">Question {step - 1} of 4</h3>
             </div>

             <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
             How old are you?           </p>
           <div className=" flex flex-col gap-4">
             {secondaryOptions.map((option) => (
               <label
                 key={option.id}
                 className={`flex items-center px-4 gap-3 py-4 rounded-lg border ${
                   selectedOption === option.id
                     ? 'bg-green-50 border-green-300'
                     : 'border-gray-300'
                 } cursor-pointer hover:border-green-400`}
               >
                 <input
                   type="radio"
                   name="status"
                   value={option.id}
                   checked={selectedOption === option.id}
                   onChange={() => setSelectedOption(option.id)}
                   className="w-5 h-5 bg-green-600 text-green-600 focus:ring-green-500"
                 />
                 <span className="text-[16px] font-inter font-medium">
                   {option.label}
                 </span>
               </label>
             ))}
           </div>
         </div>
       </div>
      )}

{step === 4 && (
        <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        <div className="flex justify-between">
            <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
               <Image src={arrow} alt="" /> Back
             </h1>
             <h3 className="text-[20px] font-inter font-medium">Question {step - 1} of 4</h3>
             </div>

             <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
             Do you have children or financial 
           dependents?          </p>
           <div className=" flex flex-col gap-4">
             {thirdOption.map((option) => (
               <label
                 key={option.id}
                 onClick={() => setSelectedOption(option.id)} // Select option on click
                 className={`flex items-center px-4 gap-3 py-6 rounded-lg border ${
                   selectedOption === option.id
                     ? '  border-green-300'
                     : 'border-gray-300'
                 } cursor-pointer  hover:bg-[#E5F3EB] hover:border-green-400`}
               >
                 
                 <span className="text-[16px] font-inter font-bold">
                   {option.label}
                 </span>
               </label>
             ))}
           </div>
         </div>
       </div>
      )}


{step === 5 && (
         <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        <div className="flex justify-between">
             <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
                
               <Image src={arrow} alt="" /> Back
             </h1>
             <h3 className="text-[20px] font-inter font-medium">Question {step - 1} of 4</h3>
             </div>

             <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
             What is the estimated value of 
           your <span className='text-[#69C5A1] border-[#69C5A1] border-b-2 border-2 border-t-0 border-l-0 border-r-0 '>net assets?  </span>             </p>
           <div className=" flex flex-col gap-4">
             {assets.map((option) => (
               <label
                 key={option.id}
                 className={`flex items-center px-4 gap-3 py-4 rounded-lg border ${
                   selectedOption === option.id
                     ? 'bg-green-50 border-green-300'
                     : 'border-gray-300'
                 } cursor-pointer hover:border-green-400`}
               >
                 <input
                   type="radio"
                   name="status"
                   value={option.id}
                   checked={selectedOption === option.id}
                   onChange={() => setSelectedOption(option.id)}
                   className="w-5 h-5 bg-green-600 text-green-600 focus:ring-green-500"
                 />
                 <span className="text-[16px] font-inter font-medium">
                   {option.label}
                 </span>
               </label>
             ))}
           </div>
         </div>
       </div>
      )}

{step === 6 && (
          <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-2 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
        <div className="flex justify-between">
              <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
               <Image src={arrow} alt="" /> Back
             </h1>
             </div>
             <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
             Your Tailored Plan    </p>
        <div className="flex flex-col pb-2 gap-4">
          {tailored.map((option) => (
            <div
              key={option.id}
              onClick={() => console.log(`Navigating to: ${option.id}`)}
              className="flex items-center  justify-between gap-4 py-5 px-4 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:border-gray-400 transition-all"
            >
              <div className="flex  items-center gap-3">
              {typeof option.icon === "string" ? (
                  <span className="text-green-600 text-3xl">{option.icon}</span>
                ) : (
                  <Image   src={option.icon || "/default-icon.png"} alt={option.label || "Default label"}  width={28} height={28} />
                )}                <div>
                  <h2 className="text-[25px] xs:text-[18px] font-inter font-semibold text-gray-900">{option.label}</h2>
                  <p className="text-[16px] xs:text-[14px] font-inter text-[#7C7C7C]">{option.description}</p>
                </div>
              </div>
              <span className="text-gray-400 text-xl"><IoIosArrowForward /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
)}
    </div>
  );
};

export default Page;




// import Image from 'next/image'
// import React, { useState } from 'react'
// import arrow from "../../../public/assets/svg/Arrow.svg"
// const Page:React.FC = () => {
//     const [selectedOption, setSelectedOption] = useState<string | null>(null);


     
      
//   return (
//     <div className="flex py-6 justify-center items-center min-h-screen bg-gradient-to-r  from-[#FAF1DF] to-[#E2F3EB]">

//     <div className='flex justify-center items-center rounded-xl shadow-xl p-8 bg-white'>
//         <div className='max-w-[580px] flex flex-col gap-6  '>
// <h1 className='flex gap-2 text-[20px] font-inter font-medium'><Image src={arrow} alt="" /> Back</h1>
// <p className='text-[30px] font-bold  font-inter text-[#191A15]'>Answer a 4 simple questions to 
// create your personalized will.</p>
// <div className='w-full flex justify-end'>
// <button
//           type="submit"
//           className=" bg-[#54BD95] font-inter text-[18px] text-white font-medium py-4 px-6 rounded-full"
//         >
//             Let's get started
//         </button>
// </div>

//         </div>
//     </div>

//     <div>
//     <div className='flex justify-center items-center rounded-xl shadow-xl p-8 bg-white'>
//         <div className='max-w-[580px] flex flex-col gap-6  '>
//             <div className='flex justify-between'>
//             <h1 className='flex gap-2 text-[20px] font-inter font-medium'>
//     <Image src={arrow} alt="" /> Back</h1>
//     <h3 className='text-[20px] font-inter font-medium'>Question 1 of 4</h3>
//             </div>

// <p className='text-[30px] font-bold  font-inter text-[#191A15]'>What is your current relationship 
// status?</p>
// <div className=" p-4 flex flex-col gap-4">
//       {options.map((option) => (
//         <label
//           key={option.id}
//           className={`flex items-center  px-4 gap-3 py-3 rounded-lg border ${
//             selectedOption === option.id
//               ? "bg-green-50 border-green-300"
//               : "border-gray-300"
//           } cursor-pointer hover:border-green-400`}
//         >
//           <input
//             type="radio"
//             name="status"
//             value={option.id}
//             checked={selectedOption === option.id}
//             onChange={() => setSelectedOption(option.id)}
//             className="w-5 h-5 text-green-600  focus:ring-green-500"
//           />
//           <span className="text-[16px] font-inter font-medium">{option.label}</span>
//         </label>
//       ))}
//     </div>

//         </div>
//     </div>

//     </div>
//     </div>
//   )
// }

// export default Page