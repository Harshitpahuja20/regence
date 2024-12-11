import Image from 'next/image';
import React, { useState } from 'react';
import arrow from '../../../public/assets/svg/Arrow.svg';
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';

const Page: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Step to track the current visible section
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  type FormDataType = {
    [key: string]: string; // Allow dynamic string keys
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState<string>('');

  type Option = {
    id: string;
    label: string;
    title?: string;
    icon?: string; // Replace with an actual image if needed
    description?: string; // Replace with an actual description if needed

  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Form validation: Check if all fields are filled and if passwords match
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setFormError('Please fill out all required fields before continuing.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }

    setFormError(''); // Clear any previous error
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  const options = [
    { id: 'Email Address', label: 'Email Address', type: 'email', name: 'email' },
    { id: 'Create Password', label: 'Create Password', type: 'password', name: 'password' },
    { id: 'Confirm Password', label: 'Confirm Password', type: 'password', name: 'confirmPassword' },
  ];
  const  thirdOption: Option[] =[
    { id:"Property and financial affairs",label: 'Property and financial affairs' },
    { id:"no",label: 'Health and walfare' },
  ]
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && selectedOption) {
      setStep((prevStep) => prevStep + 1); // Go to the next step
    }
  };
  return (
    <div className="flex py-6 xs:px-4 justify-center items-center w-full  bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
      {step === 1 && (
        <div className="flex justify-center items-center rounded-xl shadow-xl xs:p-4 p-8 bg-white">
          <div className="max-w-[580px] xs:max-w-full  flex flex-col gap-6">
            <h1 className="flex xs:text-[15px] gap-2 text-[20px] font-inter font-medium">
              <Image src={arrow} alt="" /> Back
            </h1>
            <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
            Complete Your Lasting Power of Attorney for Only £99
            </p>
            <div className="w-full flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)} // Set step to 2 when clicked
                className="bg-[#54BD95] xs:text-[13px] xs:py-2 xs:px-4 font-inter text-[18px] text-white font-medium py-4 px-6 rounded-full"
              >
                Start my LPA
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-center xs:min-w-full w-full items-center ">
          <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-0 gap-6 rounded-xl shadow-xl  xs:p-4 p-8 bg-white" tabIndex={0}>
            <div className="flex justify-between">
              <h1
                className="flex gap-2  xs:text-[15px] text-[20px] font-inter font-medium cursor-pointer"
                onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
              >
                <Image src={arrow} alt="" /> Back
              </h1>
            </div>

            <p className="text-[30px] xs:text-[23px] font-bold  xs:py-4 font-inter text-[#191A15]">
            Let's get started
            </p>

            {/* Display form validation error */}
           
            <div className=" flex flex-col gap-4">
              {options.map((option) => (
                <div key={option.id}>
                  <div className="text-[16px] xs:py-2 py-4 font-inter font-medium">{option.label}</div>
                  <label
                    className={`flex items-center rounded-lg gap-3 border ${
                      formData[option.name as keyof typeof formData] ? 'border-green-300' : 'border-gray-300'
                    } cursor-pointer hover:border-green-400`}
                  >
                    <input
                      name={option.name}
                      type={option.type}
                      value={ formData[option.name as keyof typeof formData]} 
                      onChange={handleChange}
                      className="w-full py-4 xs:py-3 xs:px-3 px-4 rounded-lg"
                      placeholder={option.label}
                    />
                  </label>
                </div>
              ))}
                  {formError && (
              <div className="text-red-600 text-sm mb-4">
                <p>{formError}</p>
              </div>
            )}
            </div>

            <div className="w-full flex justify-end">
              <button
                type="button"
                onClick={handleSubmit} // Use handleSubmit for form validation
                className="bg-[#54BD95] xs:mt-4 xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-4 px-6 rounded-full"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      
{step === 3 && (
        <div className="flex justify-center xs:min-w-full w-full items-center ">
        <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-0 gap-6 rounded-xl  shadow-xl  xs:p-4 p-8 bg-white" onKeyDown={handleKeyPress} tabIndex={0}>
          <div className="flex justify-between">
            <h1
          className="flex gap-2 text-[20px] xs:text-[15px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
               <Image src={arrow} alt="" /> Back
             </h1>
             </div>

           <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
           Which type of LPA do you want 
           to make?        </p>
           <div className=" flex flex-col  gap-4">
             {thirdOption.map((option) => (
               <label
                 key={option.id}
                 onClick={() => setSelectedOption(option.id)} 
                 className={`flex items-center px-4 xs:gap-1 gap-3 xs:py-3 py-6 rounded-lg border ${
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

{step === 4 && (
       <div className="flex justify-center xs:min-w-full w-full items-center ">
       <div className="max-w-[580px] min-w-[579px] xs:min-w-full flex flex-col xs:gap-0 gap-6 rounded-xl  xs:p-4 p-8 shadow-xl  bg-white" tabIndex={0}>
         <div className="flex justify-between">
           <h1
          className="flex gap-2 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))} // Decrement step, but not below 1
        >
               <Image src={arrow} alt="" /> Back
             </h1>
             </div>

             <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
             Check if you have mental capacity      </p>
           <div className=" ">
           <ul className='flex flex-col gap-2 list-disc'>
            <li className='text-[21px] flex  gap-2 items-center font-inter  text-[#666666] font-medium'> <GoDotFill  className='min-w-[20px] mt-[3px]'/>
            must be 18 or over</li>
            <li  className='text-[21px] flex gap-2 font-inter text-[#666666] font-medium'><GoDotFill className='min-w-[20px] mt-[7px]'/>
            must be able to make their own decisions at the time their LPA is made – this is known as having mental capacity</li>
            </ul>
           </div>
           <div className="w-full flex justify-end">
           <Link 
  href="/donor" 
  className="bg-[#54BD95] xs:mt-4 xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-4 px-6 rounded-full inline-block text-center"
>
  Add donor
</Link>

            
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

//     type Option = {
//         id: string;
//         label: string;
//       };
      
//       const options: Option[] = [
//         { id: "single", label: "Single" },
//         { id: "singleWithPartner", label: "Single with Partner" },
//         { id: "married", label: "Married" },
//         { id: "marriedWithBlendedFamily", label: "Married with Blended Family" },
//       ];
     
      
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