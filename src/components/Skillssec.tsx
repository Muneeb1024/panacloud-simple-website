// import Link from "next/link";
import Image from "next/image";
function Skills() {
  return (
    <section className="bg-white text-black w-full py-14 sm:py-16 lg:py-14 px-16 sm:px-20 lg:px-20 border-t flex flex-col">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold">
          OUR<span className="text-[#668e19]"> SKILLS</span>
        </h1>
        <p className="text-[#bcbec0] text-[12px] md:text-[14px] text-center sm:w-[420px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam est
          corrupti maiores quasi qui id vitae modi esse error quaerat!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center mt-12">
        <div className="flex flex-col items-center justify-start w-[220px] h-[270px] mb-14 lg:mb-0">
          <Image src={"/ring1.png"} alt="ring-pic" width={200} height={200} className=""/>
         
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-[220px] h-[270px] mb-14 lg:mb-0">
          <Image src={"/ring2.png"} alt="ring-pic" width={200} height={200} className=""/>
          <span className="text-lg">SEO & ADS</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-[220px] h-[270px] mb-14 sm:mb-0 lg:mb-0">
          <Image src={"/ring4.png"} alt="ring-pic" width={200} height={200} className=""/>
          <span className="text-lg">BRANDING</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-[220px] h-[270px] sm:mb-0 lg:mb-0">
          <Image src={"/ring3.png"} alt="ring-pic" width={200} height={200} className=""/>
          <span className="text-lg">WEB DESIGN</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
