import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/assets/svg/Vector1.svg"
interface HeroProps {
    title: React.ReactNode; // Allows JSX or plain text
    subtitle: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText: string;
  secondaryIcon: string;
  mainImage: string;
  decorationImages: {
    src: string;
    alt: string;
    styles: string;
  }[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryIcon,
  mainImage,
  decorationImages,
}) => {
  return (
    <div className="xs:px-[3%] xl:pt-[5rem] py-6 xl:pb-[0rem] sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%] bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
      <div className="w-full flex xs:flex-col justify-between gap-4 pb-8 xs:px-4">
        <div className="w-[50%] xs:w-full">
          <div className="relative">
            <h1 className="lg:text-[50px] xl:text-[60px] md:text-[40px] sm:text-[35px] xs:text-[30px] font-inter font-bold text-[#191A15]">
              {title}
            </h1>
            <Image src={img1} alt="Vector Decoration" />
          </div>
          <p className="font-inter py-4 font-medium xl:text-[20px] text-[18px]">
            {subtitle}
          </p>
          <div className="flex pt-6 gap-6 items-center">
          <Link 
  href={buttonLink} 
  className="bg-[#54BD95] xl:text-[18px] font-medium px-5 py-3 font-inter text-white rounded-3xl inline-block text-center"
  role="button"
>
  {buttonText}
</Link>

            <button className="flex gap-4 text-[#191A15] xl:text-[18px] font-medium font-inter items-center">
              <Image src={secondaryIcon} alt="Secondary Icon" />
              {secondaryButtonText}
            </button>
          </div>
        </div>

        <div className="w-[50%] flex xs:justify-center xs:w-full justify-end">
          <div className="relative xs:w-[80%]">
            <Image src={mainImage} alt="Hero Image" className="xs:w-full w-[85%] rounded-md" />
            {decorationImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                className={`absolute ${img.styles}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
