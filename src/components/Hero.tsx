function Hero() {
    return (
      <div className="w-full min-h-72">
        <div
          className="bg-cover w-full h-72 sm:h-72 md:h-[400px]"
          style={{ backgroundImage: "url('/heroimg.jpg')" }}
        >
          <div className="flex justify-between pt-20 sm:pt-20 md:pt-[108px] lg:pt-[120px]">
            <div className="h-8 sm:h-10 md:h-[50px] lg:h-[76px] w-28 sm:w-60 md:w-96 lg:w-96 bg-[#a2d84c]"></div>
            <h1 className="text-[22px] sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold flex-shrink-0 mx-2 sm:mx-2 md:mx-4 lg:mx-5">
              WE ARE EXPERTS
            </h1>
            <div className="h-8 sm:h-10 md:h-[50px] lg:h-[76px] w-28 sm:w-60 md:w-96 lg:w-96 bg-[#a2d84c]"></div>
          </div>
          <div className="flex flex-col items-center justify-center mt-3 sm:mt-3 md:mt-6 lg:mt-6 px-7 w-full">
            <p className="text-white text-center text-sm md:text-[18px] w-full md:w-[80%] lg:w-[70%]">
              Lorem ipsum dolor sit ipsum dolor idolor amet consectetur m dolor sit ipsum dolor ipsum dolor dolor sit ipsum dolor ipsum doloramet consectetur atus
              vitae beatae.
            </p>
            <div className="flex flex-col relative">
            <button className="bg-[#ff831d] text-sm sm:text-[16px] md:text-[18px] py-1 pb-[6px] sm:pb-[6px] md:pb-[8px] lg:pb-[9px] md:py-[6px] px-5 sm:px-7 md:px-9 rounded-[3px] sm:rounded-[4px] mt-4 sm:mt-5 md:mt-10 cursor-pointer">
              Read More
            </button>
  
            <button className="bg-[#ffbd1a] text-sm sm:text-[16px] md:text-[18px] py-1 md:py-[6px] px-5 sm:px-7 md:px-9 rounded-[3px] sm:rounded-[4px] mt-4 sm:mt-5 md:mt-10 cursor-pointer absolute">
              Read More
            </button>
            </div>
            
            <div className="flex space-x-1 md:space-x-2 mt-5 sm:mt-9 md:mt-10 lg:mt-10">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full opacity-90"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full opacity-50"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Hero;
  