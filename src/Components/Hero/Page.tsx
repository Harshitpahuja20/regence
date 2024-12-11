import React from "react";
import Hero from "../CommonFile/Page";

import mainImage from "../../../public/assets/svg/Hero.svg";
import vector1 from "../../../public/assets/svg/ProtectYour.svg";
import vector2 from "../../../public/assets/svg/Safety.svg";
import vector3 from "../../../public/assets/svg/tick.svg";
import vector4 from "../../../public/assets/svg/Legally.svg";
import musicIcon from "../../../public/assets/svg/Music.svg";

const Page: React.FC = () => {
  const decorationImages = [
    { src: vector1, alt: "Protect Your Icon", styles: "xs:max-w-[50%] sm:left-[-10%] sm:max-w-[35%] absolute top-[28%] left-[-22%]" },
    { src: vector2, alt: "Safety Icon", styles: "absolute xs:max-w-[20%] sm:max-w-[12%] left-[-9%] bottom-[10%]" },
    { src: vector3, alt: "Tick Icon", styles: "absolute xs:max-w-[20%] sm:max-w-[10%] top-[6%] right-[-5%]" },
    { src: vector4, alt: "Legally Icon", styles: "absolute sm:right-[-8%] sm:max-w-[30%] xs:max-w-[40%] right-[-16%] bottom-[10%]" },
  ];

  return (
    <Hero
    title={
      <>
        Plan Your <br className="hidden xl:flex lg:flex"/> Legacy, Securely <br className="hidden xl:flex lg:flex"/> and Easily
      </>
    } 
         subtitle
    ={<>
Create a legally-binding will in minutes, guided <br  className="hidden xl:flex lg:flex md:flex"/> by experts and stored securely.
    </>
    }
    
      buttonText="Start My Will"
      buttonLink="/lpa"
      secondaryButtonText="Learn More"
      secondaryIcon={musicIcon}
      mainImage={mainImage}
      decorationImages={decorationImages}
    />
  );
};

export default Page;


// import React from "react";
// import Image from "next/image";

// import img1 from "../../../public/assets/svg/Vector1.svg"
// import img2 from "../../../public/assets/svg/Music.svg";
// import img3 from "../../../public/assets/svg/Hero.svg";
// import vector1 from "../../../public/assets/svg/ProtectYour.svg";
// import vector2 from "../../../public/assets/svg/Safety.svg";
// import vector3 from "../../../public/assets/svg/tick.svg";
// import vector4 from "../../../public/assets/svg/Legally.svg";
// import Link from "next/link";

// const Hero: React.FC = () => {
//   return (
//     <div className="xs:px-[3%] xl:pt-[5rem] py-6 xl:pb-[0rem] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%]  bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
//         <div className="w-full flex xs:flex-col justify-between gap-4 pb-8 xs:px-4  ">
//       {/* Left Section */}
//       <div className="w-[50%] xs:w-full ">
//         <div className="relative">
//           <h1 className="lg:text-[50px] xl:text-[64px]  md:text-[40px] sm:text-[35px] xs:text-[30px] font-inter font-bold text-[#191A15]">
//             Plan Your <br className="hidden md:flex lg:flex xl:flex" /> Legacy,
//             Securely and Easily
//           </h1>
//           <Image src={img1} alt="Vector Decoration" />
//         </div>
//         <p className="font-inter py-4 font-medium xl:text-[20] text-[18px]">
//           Create a legally-binding will in minutes, guided  <br  className="hidden lg:flex xl:flex"/> by experts and stored
//           securely.
//         </p>
//         <div className="flex xl:pt-12 gap-6 items-center">

//           <button className="bg-[#54BD95] xl:text-[18px] font-medium px-5 py-3 font-inter text-white rounded-3xl">
// <Link href="/question">
// Start My Will</Link>
          

//           </button>
//           <button className="flex gap-4 text-[#191A15] xl:text-[18px] font-medium font-inter items-center">
//             <Image src={img2} alt="Music Icon" />
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-[50%] flex xs:justify-center xs:w-full justify-end">
//         <div className="relative xs:w-[80%]">
//           <Image src={img3} alt="Hero Image" className="xs:w-full rounded-md " />
//           <Image
//             src={vector1}
//             alt="Protect Your Icon"
//             className="xs:max-w-[50%] sm:left-[-10%] sm:max-w-[35%] absolute top-[28%] left-[-22%]"
//           />
//           <Image
//             src={vector2}
//             alt="Safety Icon"
//             className="absolute xs:max-w-[20%] sm:max-w-[12%] left-[-9%] bottom-[10%]"
//           />
//           <Image
//             src={vector3}
//             alt="Tick Icon"
//             className="absolute xs:max-w-[20%] sm:max-w-[10%] top-[6%] right-[-5%]"
//           />
//           <Image
//             src={vector4}
//             alt="Legally Icon"
//             className="absolute sm:right-[-8%] sm:max-w-[30%] xs:max-w-[40%] right-[-16%] bottom-[10%]"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
  
//   );
// };

// export default Hero;
