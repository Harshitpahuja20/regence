import React, { useState } from "react";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What legal services do you offer?",
      answer:
        "We offer a variety of legal services including will preparation, estate planning, executor guidance, legal advice, and other key legal documentation.",
    },
    {
      id: 2,
      question: "How long does it take to complete my legal documents?",
      answer: "",
    },
    {
      id: 3,
      question: "Can I make changes to my will or legal documents later on?",
      answer: "",
    },
    {
      id: 4,
      question: "How much do your legal services cost?",
      answer: "",
    },
  ];

  const handleToggle = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div  className='xs:px-[3%]  pt-6 sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%]  bg-gradient-to-r from-[#ffffff] to-[#E9F6F1]'>
     <div className="  p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`rounded-lg  ${
              activeIndex === index ? "bg-[#54BD95] text-white" : " "
            }`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center space-x-4">
                <span
                  className={`text-[16px]  font-inter font-bold ${
                    activeIndex === index ? "text-white" : "text-green-500"
                  }`}
                >
                  {faq.id.toString().padStart(2, "0")}
                </span>
                <h3
                  className={`text-[16px]  font-inter font-semibold ${
                    activeIndex === index ? "text-white" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>
              <button
                className={`w-8 h-8 xs:max-w-3 xs:max-h-3 flex items-center justify-center rounded-full text-xl font-bold ${
                  activeIndex === index
                    ? "bg-white text-green-500"
                    : "bg-white"
                }`}
              >
                {activeIndex === index ? "✕" : "+"}
              </button>
            </div>
            {activeIndex === index && (
              <div className="p-4  border-green-300">
                <p className="text-white font-inter">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>

   
  );
};

export default Page;
