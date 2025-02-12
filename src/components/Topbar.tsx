function Top() {
    return (
      <div className="bg-[#212121] text-white w-full h-8 md:h-12 flex items-center justify-between px-5">
        <div className="flex items-center text-[#bcbec0] space-x-2">
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] font-bold">f</span>
          </div>
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold">tw</span>
          </div>
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold">g+</span>
          </div>
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold">in</span>
          </div>
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-[7px] font-bold">Tube</span>
          </div>
        </div>
        <div className="flex flex-col relative">
          <button className="text-[9px] sm:text-[12px] md:text-[14px] text-center font-semibold bg-[#578212] py-[3px] sm:py-[3px] md:py-[4px] px-3 sm:px-5 text-black rounded-[2px]">Call Me Back</button>
          <button className="text-[9px] sm:text-[12px] md:text-[14px] text-center font-semibold bg-[#a2d84c] py-[2px] sm:py-[2px] md:py-[3px] px-3 sm:px-5 text-black rounded-[2px] absolute">Call Me Back</button>
        </div>
      </div>
    );
  }
  
  export default Top;
  
 