import React from 'react'
import Link from 'next/link';
const Page:React.FC = () => {
  return (
    <div className="flex py-6 justify-center items-center min-h-screen bg-gradient-to-r  from-[#FAF1DF] to-[#E2F3EB]">
    <div className="w-full max-w-[470px] xl:max-w-[580px] p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-[#191A15] font-inter text-[30px]  font-bold mb-2">Create an account</h1>
      <p className="text-[#898989] text-[21px] font-inter font-medium mb-6">
        Get the support you need today with an account.
      </p>

      <form>
        <div className="">
          <label htmlFor="fullName" className="block py-2  text-[#191A15] text-[21px] font-inter font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="py-6">
          <label htmlFor="email" className="block  py-2 text-[#191A15] text-[21px] font-inter font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block py-2  text-[#191A15] text-[21px] font-inter font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your password"
          />
        </div>
<div className='flex w-full justify-center'>
<button
          type="submit"
          className=" bg-[#54BD95] font-inter text-[19px] text-white font-medium py-3 px-[3.4rem] rounded-3xl"
        >
          Create an account
        </button>
</div>
       
      </form>

      <div className="mt-4 flex gap-2 justify-center text-center ">
        <h1 className='text-[21px] font-medium font-inter'> Already have an account?{' '}</h1>
      
        <Link href="/login">
           <h1 className='text-[21px] text-[#54BD95] border-b-2 border-[#54BD95] border-t-0 border-r-0 font-medium font-inter'>  Login</h1>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default Page








  
  
