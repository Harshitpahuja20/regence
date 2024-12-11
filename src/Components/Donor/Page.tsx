import React,{ useEffect, useState } from "react";
import arrow from '../../../public/assets/svg/Arrow.svg';
import Image from "next/image";
import {Progress} from "@nextui-org/react";
import plus from "../../../public/assets/svg/Plus.svg"
import { useRouter } from "next/router";
const Page:React.FC = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [value, setValue] = React.useState(0);
    const [progress, setProgress] = useState(0); 
    const [isDetailsSaved, setIsDetailsSaved] = useState(false); 
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
      const[attorney,setAttorney]=useState(false);
      const [showStep3, setShowStep3] = useState(false); 
      const [showStep2, setShowStep2] = useState(false); 
      const [showStep4, setShowStep4] = useState(false); 
      const [showStep5, setShowStep5] = useState(false); 
      const [showStep6, setShowStep6] = useState(false);
const [lpa,setLpa] = useState(false);

    type Option = {
        id: string;
        label: string; 
      };

    

  useEffect(() => {
    if (router.query.lpaOption) {
      router.replace('/donor', undefined, { shallow: true });
    }
  }, [router]);
    const steps = [
        "Enter Donor's Information",
        "Add Attorney",
        "Add Preferences",
        "Final Check: LPA Details",
      ];
      const Attorney:Option[]=[
        { id:"I only appoint one attorney",label: 'I only appoint one attorney' },
        { id:"Jointly and severally",label: 'Jointly and severally' },
        { id:"Jointly",label: 'Jointly' },
        { id:"Jointly for some decisions and jointly and severally for other decisions",label: 'Jointly for some decisions and jointly and severally for other decisions' },

      ]


  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const handleStepChange = (step: number) => {
    setCurrentStep(step)
    const progressValue = ((step - 1) / (steps.length - 1)) * 100;
    setProgress(progressValue);
  };

  const handleSaveDetails = () => {
    setIsDetailsSaved(true);
  };
//   const handleAttorney = () => {
//     setAttorney(true);
//     if (showStep2) {
//       setShowStep3(false);
//       setShowStep2(true);
//       setShowStep4(false);
//     } else if (showStep3) {
//       setShowStep3(true);
// setShowStep2(false);
//       setShowStep4(false);
//     } else if (showStep4) {
//       setShowStep4(true);
//       setShowStep3(false)
//       setShowStep2(false);
//     } else {
//       setShowStep3(false);
//       setShowStep4(false);
//     }
//   };
  

const handleAttorney = () => {
    setAttorney(true);
  
    if (showStep2) {
      setShowStep2(false);
      setShowStep3(true);  // Show Step 3
    } else if (showStep3) {
      setShowStep3(false);
      setShowStep4(true);  // Show Step 4
    } else if (showStep4) {
      // If Step 4 is visible, hide it and show Step 5
      setShowStep4(false);
    }else if(showStep5){
        setShowStep5(false);
        setShowStep2(false)
        setShowStep3(false)
    } 
   
    else {
      setCurrentStep(1); 
    }
  };
  
  const  thirdOption: Option[] =[
    { id:"As soon as registered",label: 'As soon as registered (with donors consent): Attorneys act with the donors permission' },
    { id:"Only if donor ",label: 'Only if donor lacks mental capacity: Attorneys act only if the donor cannot decide.' },
  ]
  const powerOption: Option[] =[
    { id:"Donor",label: "Donor"},
    { id:"Attorney",label: "Attorney"}

  ]
  return (
    <div  className="bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
     <div className=" p-8 flex items-center justify-center ">
      <div className=" w-full  justify-around flex gap-4 xs:flex-col flex-row ">
     <div className="w-[40%] xs:min-w-full bg-white h-full p-6 rounded-l-lg">
      <div className="flex flex-col text-[20px] font-inter font-bold gap-8 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Progress Bar */}
            {index > 0 && (
              <div
                className={`absolute left-[13px] top-[-40px] h-[46px] w-[3px] bg-gray-200 transition-all duration-500 ${
                  currentStep > index ? "bg-green-700 h-16" : "h-0"
                }`}
              ></div>
            )}

            {/* Step with Circle */}
            <div className="flex items-center gap-4">
              {/* Circle Indicator */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold ${
                  currentStep === index + 1 ? "bg-green-700" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </div>

              {/* Step Button */}
              <button
                onClick={() => handleStepChange(index + 1)}
                className={`flex-1 text-left py-2 px-4 rounded-md transition-all ${
                  currentStep === index + 1
                    ? "  font-bold "
                    : " text-gray-700 "
                }`}
              >
                {step}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className=" min-w-[60%] rounded-lg shadow-lg bg-white mr-4 p-6">
        {currentStep === 1 && !isDetailsSaved && ( // Show form only if details are not saved
  <div>
    <h1
      className="flex gap-2 text-sm text-green-700 hover:underline mb-4 text-[20px] font-inter font-medium cursor-pointer"
       // Decrement step, but not below 1
    >
      <Image src={arrow} alt="" /> Back
    </h1>
    <h2 className="text-xl font-bold mb-4">Enter Donor's Information</h2>
    <form className="py-4">
      <div className="flex w-full gap-4 justify-between ">
        <span className="w-1/2">
          <label htmlFor="" className="xl:text-[25px] font-medium text-[18px] text-[#191A15] font-inter">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="input-field py-4"
          />
        </span>
        <span className="w-1/2">
          <label htmlFor="" className="xl:text-[25px] text-[18px] font-medium text-[#191A15] font-inter">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="input-field py-4"
          />
        </span>
      </div>
      <div className="flex w-full py-4 gap-4 justify-between ">
        <span className="w-1/2">
          <label htmlFor="" className="xl:text-[25px] text-[18px] font-medium text-[#191A15] font-inter">Date of Birth</label>
          <input
            type="date"
            placeholder="Date of Birth"
            className="input-field py-4"
          />
        </span>
        <span className="w-1/2">
          <label htmlFor="" className="xl:text-[25px] font-medium text-[18px] text-[#191A15] font-inter">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field py-4"
          />
        </span>
      </div>
      <div>
        <label className="xl:text-[25px] font-inter text-[18px] font-semibold text-[#191A15]">Postcode lookup</label>
        <input
          type="text"
          placeholder="Find UK address"
          className="input-field py-4 text-right font-medium placeholder-green-700 text-green-700"
        />
      </div>
      <div>
        <button className="text-[18px] py-4 font-semibold text-[#54BD95]">
          Enter address manually
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="" className="xl:text-[25px] font-inter text-[20px] font-semibold text-[#191A15]">Address Line 1</label>
        <input
          type="text"
          placeholder="Address Line 1"
          className="input-field"
        />
        <label htmlFor="" className="xl:text-[25px] font-inter text-[20px] font-semibold text-[#191A15]">Address Line 2</label>
        <input
          type="text"
          placeholder="Address Line 2"
          className="input-field"
        />
        <label htmlFor="" className="xl:text-[25px] font-inter text-[20px] font-semibold text-[#191A15]">Address Line 3</label>
        <input
          type="text"
          placeholder="Address Line 3"
          className="input-field"
        />
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span className="py-4 text-[16px] font-inter">
            The donor is unable to sign or make a mark on the LPA
          </span>
        </label>
      </div>
      <div className="flex justify-end mt-4 gap-4">
        <button
          type="button"
          onClick={handleSaveDetails} // Save details
          className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
        >
          Save Details
        </button>
        <button
          type="button"
          className="border text-[#C9C9C9] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 font-medium py-3 px-6 rounded-full"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}
{isDetailsSaved && currentStep === 1 && (
  <div className="mt-8 xs:min-w-full sm:min-w-full min-w-[580px]">
    {/* Back Button */}
    <button
      onClick={() => setIsDetailsSaved(false)} // Set `isDetailsSaved` to false to show the form again
      className="flex gap-2 text-[#54BD95] font-medium mb-4"
    >
      <Image src={arrow} alt="" />
      Back
    </button>

    {/* Title */}
    <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
      When can the LPA be used?
    </p>

    {/* Options */}
    <div className="flex flex-col py-4 gap-4">
      {thirdOption.map((option) => (
        <label
          key={option.id}
          className={`flex xs:w-1/2 items-center px-4 xs:gap-1 gap-3 xs:py-3 py-6 rounded-lg border ${
            selectedOption === option.id
              ? 'border-green-300  bg-[#E2F2EB]' // Only change the border color on selection
              : 'border-gray-300'
          } cursor-pointer hover:border-green-400`}
        >
          <input
            type="radio"
            name="lpaOption"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)} // Update selected option
            className="hidden" // Hide the input, use label styles
          />
          <span className="text-[16px] font-inter font-bold">
            {option.label}
          </span>
        </label>
      ))}
    </div>

    {/* Next Step Button */}
    <button
      onClick={() => {
        if (selectedOption) {
          handleStepChange(2); // Proceed to next step if an option is selected
        } else {
          alert('Please select an option before proceeding.');
        }
      }}
      className={`py-2 px-4 mt-4 rounded-full ${
        selectedOption
          ? 'bg-[#54BD95] text-white' // Enable button if an option is selected
          : 'bg-gray-300 text-gray-500 cursor-not-allowed' // Disable button if no option is selected
      }`}
      disabled={!selectedOption} // Disable button if no option is selected
    >
      Next Step
    </button>
  </div>
)}
  {currentStep === 2 && !attorney && (
            <div>
             
              <button
                onClick={() => handleStepChange(1)}
                className="flex gap-2 text-[#54BD95] font-medium mb-4"
    >
      <Image src={arrow} alt="" />
      Back
    </button>
              <p className="text-[30px] py-4 xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
              How should your Attorneys make decisions?
              </p>

              <form className="space-y-4">
      {Attorney.map((option) => (
        <label
          key={option.id}
          className={`flex items-center px-4 xs:gap-1 gap-3 xs:py-2 py-4 rounded-lg border ${
            selectedOption === option.id
              ? 'border-green-300 bg-[#E2F2EB]' // Only change the border color on selection
              : 'border-gray-300'
          } cursor-pointer hover:border-green-400`}
        >
             <input
            type="radio"
            name="lpaOption"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)} // Update selected option
            className="hidden" // Hide the input, use label styles
          />
        <span className="text-[16px] font-inter font-bold">
            {option.label}
          </span>
        </label>
      ))}
      <div className="w-full flex justify-end">
      <button
        className="py-2 px-4 bg-[#54BD95] text-white mt-4 rounded-full"
                  onClick={handleAttorney} // Save details
    >
      Continue
    </button>
      </div>
       
    </form>
            </div>
)}

{attorney && showStep2 &&  (
   <div>
   <button
     className="flex gap-2 text-sm text-green-700 hover:underline mb-4 text-[20px] font-inter font-medium cursor-pointer"
     onClick={() => setAttorney(false)}   >
     <Image src={arrow} alt="" /> Back
   </button>
   <h2 className="text-xl font-bold mb-4">Add Attorney Information</h2>
   <form className="py-4">
    <div className="pb-4">
        <label htmlFor="" className="xl:text-[25px] py-2 font-medium text-[18px] text-[#191A15] font-inter">Title</label>
        <input
          type="text"
          placeholder=""
          className="input-field py-3"
        />
  
    </div>
     <div className="flex w-full gap-4 justify-between ">
       <span className="w-1/2">
         <label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">First Name</label>
         <input
           type="text"
           placeholder=""
           className="input-field py-3"
         />
       </span>
       <span className="w-1/2">
         <label htmlFor="" className="xl:text-[25px]  text-[18px] font-medium text-[#191A15] font-inter">Last Name</label>
         <input
           type="text"
           placeholder=""
           className="input-field py-3"
         />
       </span>
     </div>
     <div className=" py-4 ">
         <label htmlFor="" className="xl:text-[25px] py-2 text-[18px] font-medium text-[#191A15] font-inter">Date of Birth</label>
         <input
           type="date"
           placeholder="Date of Birth"
           className="input-field py-3"
         />
    
     </div>
    
         <label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">Email Address</label>
         <input
           type="email"
           placeholder="Email Address"
           className="input-field py-3"
         />
     
     <div>
       <label className="xl:text-[25px] font-inter text-[18px] font-semibold text-[#191A15]">Postcode </label>
       <input
         type="text"
         placeholder="Find UK address"
         className="input-field py-3 text-right font-medium placeholder-green-700 text-green-700"
       />
     </div>
     <div>
       <button className="text-[18px] py-4 font-semibold text-[#54BD95]">
         Enter address manually
       </button>
     </div>
     <div>
       <label className="xl:text-[25px] font-inter text-[18px] font-semibold text-[#191A15]">Enter Address </label>
       <input
         type="text"
         placeholder=""
         className="input-field py-3  font-medium "
       />
     </div>
     <h1 className="py-3 font-inter flex gap-4 text-[20px] font-medium text-[#666666]"><Image src={plus} alt="" className=""/> Add another attorney</h1>
     <div>
       
     </div>
     <div className="flex justify-end mt-4 gap-4">
       <button
         type="button"
          onClick={() => {
        setAttorney(true);
        setShowStep2(false);
        setShowStep3(true);  // Hide Step 5
           // Show Step 4
      }}  // Save details
         className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
       >
       Save and Continue
       </button>
       <button
         type="button"
         className="border text-[#C9C9C9] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 font-medium py-3 px-6 rounded-full"
       >
         Cancel
       </button>
     </div>
   </form>
 </div>
)}

{attorney   && showStep3 &&(
      <div className="mt-8 min-w-[580px]">
      {/* Back Button */}
      <button
        onClick={() => {
            setAttorney(false);
 setShowStep2(true);
            setShowStep3(false);  // Hide Step 3
              // Show Step 2
          }}   // Set `isDetailsSaved` to false to show the form again
        className="flex gap-2 text-[#54BD95] font-medium mb-4"
      >
        <Image src={arrow} alt="" />
        Back
      </button>
  
      {/* Title */}
      <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
      Who will register the Power of Attorney?      </p>
  
      {/* Options */}
      <div className="flex flex-col py-4 gap-4">
        {powerOption.map((option) => (
          <label
            key={option.id}
            className={`flex items-center px-4 xs:gap-1 gap-3 xs:py-3 py-6 rounded-lg border ${
              selectedOption === option.id
                ? 'border-green-300  bg-[#E2F2EB]' // Only change the border color on selection
                : 'border-gray-300'
            } cursor-pointer hover:border-green-400`}
          >
            <input
              type="radio"
              name="lpaOption"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)} // Update selected option
              className="hidden" // Hide the input, use label styles
            />
            <span className="text-[16px] font-inter font-bold">
              {option.label}
            </span>
          </label>
        ))}
      </div>
  
      {/* Next Step Button */}
      <div className="flex w-full justify-end">
      <button
         className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
         onClick={handleAttorney}
         
      >
       Continue
      </button>
      </div>
     
    </div>
)}

{attorney && showStep4 &&(
       <div className="mt-8 min-w-[580px]">
       {/* Back Button */}
       <button
        onClick={() => {
            setAttorney(false);
            setShowStep4(false);  // Hide Step 4
            setShowStep3(true);   // Show Step 3
          }}  // Set `isDetailsSaved` to false to show the form again
         className="flex gap-2 text-[#54BD95] font-medium mb-4"
       >
         <Image src={arrow} alt="" />
         Back
       </button>
   
       {/* Title */}
       <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
       Who is the certificate provider?    </p>
   
     
       <textarea
  className="w-full h-[150px] xs:h-[120px] p-4 mt-4 border border-[#ccc] rounded-lg resize-none"
  placeholder="Brief explanation of the role of the certificate provider"
  rows={3} // Use curly braces to pass numbers
  maxLength={500} // Optional: You can limit the number of characters if needed
></textarea>
      <div className="flex w-full justify-end pt-4">
      <button
         type="button"
         onClick={() => {
            setAttorney(true);  // Keep attorney true if needed for step 5
            setShowStep4(false);  // Hide Step 4
            setShowStep5(true);   // Show Step 5
          }}
         className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
       >
      Add a certificate provider
       </button>
      </div>



     </div>
)}

{attorney && showStep5 && (
  <div className="mt-8 min-w-[580px]">
    {/* Back Button */}
    <button
      onClick={() => {
        setAttorney(false);
        setShowStep5(false);  // Hide Step 5
        setShowStep4(true);   // Show Step 4
      }} // Set `isDetailsSaved` to false to show the form again
      className="flex gap-2 text-[#54BD95] font-medium mb-4"
    >
      <Image src={arrow} alt="" />
      Back
    </button>

    {/* Title */}
    <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
      Who should be notified about the LPA? 
    </p>
    <p className="text-[20px] text-[#666666] font-inter font-medium">
      You can add up to 5 people to be notified about the LPA application.
    </p>
    <div className="flex flex-col ">
      <label htmlFor="" className="py-4 font-inter font-medium text-[#191A15]">Enter Person Name</label>
      <input type="text" className="py-4 border rounded-xl"/>
    </div>
    <h1 className="py-3 font-inter flex gap-4 text-[20px] font-medium text-[#666666]">
      <Image src={plus} alt="" className=""/> Add another attorney
    </h1>

    <div className="flex w-full justify-end pt-4">
      <button
        type="button"
        onClick={() => {
          setAttorney(true); 
          setShowStep5(false);  // Hide Step 5
          setLpa(true);   // Show Step 6
          handleStepChange(3);  // Call handleStepChange to move to Step 6
        }}  // Save details
        className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
      >
        Add a certificate provider
      </button>
    </div>
  </div>
)}

 {currentStep === 3 && !lpa && (
    <div className="mt-8 min-w-[580px]">
    <button
      onClick={() => {
        setAttorney(false);
        setShowStep5(true);  
        setShowStep4(false);  
      }} 
      className="flex gap-2 text-[#54BD95] font-medium mb-4"
    >
      <Image src={arrow} alt="" />
      Back
    </button>

    {/* Title */}
    <p className="text-[30px] xs:text-[23px] font-bold xs:py-4 font-inter text-[#191A15]">
    Add Preferences and Instructions </p>
<p className="text-[20px] text-[#666666] font-inter font-medium">Option for the donor to provide specific instructions for the 
attorneys.</p>
<p className="p-3">
<input type="text" className="py-4 w-full border rounded-xl"/>

</p>



   <div className="flex w-full justify-end pt-4">
   <button
      type="button"
      onClick={() => {
        setAttorney(true);  // Keep attorney true if needed for step 5
        setShowStep5(false);  // Hide Step 5
        setLpa(true);   // Show Step 6
        handleStepChange(3);  // Call handleStepChange to move to Step 6
      }}  
      className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
    >
   Add & Continue
    </button>
   </div>
  </div>
        
        )}
{lpa && currentStep === 3 &&( 

 <div>
 <button
   className="flex gap-2 text-sm text-green-700 hover:underline mb-4 text-[20px] font-inter font-medium cursor-pointer"
   onClick={() =>{setLpa(false)

   handleStepChange(3)}}  >
   <Image src={arrow} alt="" /> Back
 </button>
 <h2 className="text-xl font-bold mb-4">Final Check: LPA Details</h2>
 <form className="py-4">
  <div className="pb-4">
      <label htmlFor="" className="xl:text-[25px] py-2 font-medium text-[18px] text-[#191A15] font-inter">Type of LPA</label>
      <input
        type="text"
        placeholder="Property and finance"
        className="input-field py-3"
      />

  </div>
   <div className="flex w-full gap-4 justify-between ">
     <span className="w-1/2">
       <label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">Donor Name</label>
       <input
         type="text"
         placeholder="Mr. John Bee"
         className="input-field py-3"
       />
     </span>
     <span className="w-1/2">
       <label htmlFor="" className="xl:text-[25px] py-2 text-[18px] font-medium text-[#191A15] font-inter">Donor Date of Birth</label>
       <input
         type="date"
         placeholder="1 January 1965"
         className="input-field py-3"
       />
     </span>
   </div>
   
  <div className="flex gap-4 pt-4 w-full">
<span className="w-1/2">
<label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">Donor Email Address</label>
       <input
         type="email"
         placeholder="h.john@gmail.com"
         className="input-field py-3"
       />
</span>
      <span className="w-1/2">
      <label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">Sign</label>
       <input
         type="text"
         placeholder="Yes"
         className="input-field py-3"
       />
      </span>
       
         </div>
         <div className="pt-4">
     <label className="xl:text-[25px] font-inter py-2 text-[18px] font-semibold text-[#191A15]">Donor Address</label>
     <input
       type="text"
       placeholder="12 Ridings Avenue, London, N21 2EL"
       className="input-field py-3  font-medium "
     />
   </div>
   <div className="pt-4">
     <label className="xl:text-[25px] font-inter py-2 text-[18px] font-semibold text-[#191A15]">When LPA Starts</label>
     <input
       type="text"
       placeholder="As soon as it's registered"
       className="input-field py-3  font-medium "
     />
   </div>

   <div className="flex w-full gap-4 justify-between ">
     <span className="w-1/2">
       <label htmlFor="" className="xl:text-[25px]  py-2 font-medium text-[18px] text-[#191A15] font-inter">Attorney Name</label>
       <input
         type="text"
         placeholder="Miss Medi Barand"
         className="input-field py-3"
       />
     </span>
     <span className="w-1/2">
       <label htmlFor="" className="xl:text-[25px] py-2  text-[18px] font-medium text-[#191A15] font-inter">Attorney Date of Birth</label>
       <input
         type="date"
         placeholder="1 January 1965"
         className="input-field py-3"
       />
     </span>
   </div>
   
   <div className="pt-4">
     <label className="xl:text-[25px] py-2 font-inter text-[18px] font-semibold text-[#191A15]">Attorney Address</label>
     <input
       type="text"
       placeholder="7 Ridings Avenue, London, N21 2EL"
       className="input-field py-3 font-medium "
     />
   </div>
   <div className="pt-4">
     <label className="xl:text-[25px] py-2 font-inter text-[18px] font-semibold text-[#191A15]">Replacement Attorneys</label>
     <input
       type="text"
       placeholder="No replacement attorneys"
       className="input-field py-3 font-medium "
     />
   </div>
   <div className="pt-4">
     <label className="xl:text-[25px] py-2 font-inter text-[18px] font-semibold text-[#191A15]">Certificate Provider</label>
     <input
       type="text"
       placeholder="Not added"
       className="input-field py-3 font-medium "
     />
   </div>
 
  
   <div>
     
   </div>
   <div className="flex justify-end mt-4 gap-4">
     <button
       type="button"
       onClick={handleAttorney} // Save details
       className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
     >
    Confirm and Continue
     </button>
     <button
       type="button"
       className="border text-[#C9C9C9] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 font-medium py-3 px-6 rounded-full"
     >
      Save for Later
     </button>
   </div>
 </form>
</div>
)}


        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Page;
