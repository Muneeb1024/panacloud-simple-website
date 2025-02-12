import Image from "next/image";
import Link from "next/link";
import { TiPhone } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#668e19] text-white py-20 px-20 sm:gap-y-16 grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 place-items-center place-content-center relative">
      {/* section1 */}
      <div className="h-72 w-60 mb-5 sm:mb-0 flex flex-col col-span-1 sm:col-span-6 lg:col-span-3">
        <Image src={"/logo2.png"} alt="logo" width={160} height={160} />
        <p className="text-[12px] mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          accusantium laboriosam praesentium pariatur autem laborum culpa
          dolores nihil magnam natus.
        </p>
        <span className="text-lg mt-16">ⓒPanacloud 2024</span>
      </div>
       {/* section2 */}
       <div className="h-72 w-60 flex flex-col col-span-1 sm:col-span-6 lg:col-span-3">
        <h1 className="font-bold text-[28px] mb-6">SERVICES</h1>
        <ul className="space-y-2 text-[12px] underline">
          <li>
            <Link href={"#"}>Lorem Ipsum</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#a2d84c] w-[1px] h-[240px] hidden lg:flex absolute sm:bottom-[104px] lg:right-[720px]"></div>
      {/* section3 */}
      <div className="h-72 w-60 flex flex-col col-span-1 sm:col-span-6 lg:col-span-3">
        <h1 className="font-bold text-[28px] mb-6">USEFUL LINKS</h1>
        <ul className="space-y-2 text-[12px] underline">
          <li>
            <Link href={"#"}>Lorem Ipsum</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
          <li>
            <Link href={"#"}>Lorem Ipsum Dolar</Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#a2d84c] w-[1px] h-[240px] hidden md:flex absolute sm:bottom-[104px] lg:bottom-[104px] lg:right-[390px]"></div>
      {/* SECTION4 */}
      <div className="h-72 w-60 flex flex-col col-span-1 sm:col-span-6 lg:col-span-3">
        <h1 className="font-bold text-[28px] mb-5">CONTACTS</h1>
        <ul className="space-y-2 text-sm">
          <li className="">
            <Link href={"/"}>
              <TiPhone className="inline text-[21px] mr-1" />
              <span className="hover:underline">+92(304)386-6719</span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <TiPhone className="inline text-[21px] mr-1" />
              <span className="hover:underline">+92(317)011-3001</span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MdEmail className="inline text-[21px] mr-1" />
              <span className="hover:underline">info@website.com</span>
            </Link>
          </li>
        </ul>
        <h1 className="font-bold text-[24px] mt-10 mb-5 ">FOLLOW US</h1>
        <div className="flex items-center text-[#668e19] space-x-3">
          <div className="bg-[#303030] w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 p-1 rounded-full flex items-center justify-center">
            <span className="text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] font-bold">
              f
            </span>
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
      </div>
    </footer>
  );
}

export default Footer;
