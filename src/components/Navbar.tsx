"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Nav() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    //main nav container tag
    <nav className="bg-white text-black border">
      <div className="w-full h-16 sm:16 md:h-18 lg:h-18 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* this is logo code */}
        <Link href="/">
          <div className="h-auto w-28 flex items-center justify-center">
            <Image
              className=""
              src="/logo.png"
              alt="LOGO"
              width={100}
              height={100}
            ></Image>
          </div>
        </Link>
        {/* this is nav link code for large screens */}
        <div className="hidden md:flex items-center justify-between space-x-3 sm:space-x-3 md:space-x-3 lg:space-x-5 flex-shrink-0 text-[12px] lg:text-[16px] ">
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            WHY US
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            ABOUT
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            SERVICES
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            PORTFOLIO
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            PROCESS
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            REVIEWS
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            OUR SKILLS
          </Link>
          <Link
            href="#"
            className="py-[18px] px-1 focus:font-semibold focus:border-b-8 focus:border-yellow-500"
          >
            CONTACT US
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-1 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <IoMdClose className="text-3xl font-bold" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl font-bold" />
            )}
          </button>
        </div>
      </div>

      {/* this is nav link code for small screens */}
      {isClick && (
        <div className="md:hidden">
          <div className="flex flex-col pt-2">
             <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              WHY US
            </Link>

            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              SERVICES
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              PORTFOLIO
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              PROCESS
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              REVIEWS
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              OUR SKILLS
            </Link>
            <Link
              href="#"
              className="bg-white text-black py-[14px] px-4 text-sm focus:bg-slate-200 focus:font-bold border"
            >
              CONTACT US
            </Link> 
          </div>
        </div>
      )}
    </nav>
  );
};
