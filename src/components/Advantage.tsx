import Image from "next/image";
function Advan() {
    return (
        <div className="bg-white text-[#bcbec0] px-10 py-10 lg:py-16">
            <div className="flex flex-col justify-center items-center space-y-3 mb-10">
                <h1 className="text-[#668e19] text-[27px] sm:text-4xl font-bold">
                    <span className="text-black">OUR</span> ADVANTAGES
                </h1>
                <p className="text-[11px] text-center w-80 sm:w-[450px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt at
                    hic officiis voluptates, voluptates, dolores porro consectetur fuga!
                </p>
            </div>
            {/* //image cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 place-items-center sm:place-content-center sm:place-items-center gap-y-10">
                {/* //card 1 */}
                <div className="flex flex-col items-center justify-center w-60 flex-shrink-0">
                    <div className="w-44 h-44 bg-[#f1f2f2] rounded-full flex items-center justify-center mb-3">
                        <Image
                        src={"/img1.png"}
                        alt="image"
                        width={70}
                        height={70}
                        />
                    </div>
                    <h3 className="text-black text-[15px]">INNOVATION</h3>
                    <p className="text-[11px] text-center">Lorem ipsum, dolor sit amet ipsum, dolor sit ametconsectetur adipisicing elit. Ex, quasi inventore!</p>
                </div>
                {/* //card 2 */}
                <div className="flex flex-col items-center justify-center w-60 flex-shrink-0">
                    <div className="w-44 h-44 bg-[#f1f2f2] rounded-full flex items-center justify-center mb-3">
                        <Image
                        src={"/img2.png"}
                        alt="image"
                        width={70}
                        height={70}
                        />
                    </div>
                    <h3 className="text-black text-[15px]">QUALITY</h3>
                    <p className="text-[11px] text-center">Lorem ipsum, dolor sit amet ipsum, dolor sit ametconsectetur adipisicing elit. Ex, quasi inventore!</p>
                </div>
                {/* //card 3 */}
                <div className="flex flex-col items-center justify-center w-60 flex-shrink-0">
                    <div className="w-44 h-44 bg-[#f1f2f2] rounded-full flex items-center justify-center mb-3">
                        <Image
                        src={"/img3.png"}
                        alt="image"
                        width={70}
                        height={70}
                        />
                    </div>
                    <h3 className="text-black text-[15px]">EXPERIENCE</h3>
                    <p className="text-[11px] text-center">Lorem ipsum, dolor sit amet ipsum, dolor sit ametconsectetur adipisicing elit. Ex, quasi inventore!</p>
                </div>
                {/* //card 4 */}
                <div className="flex flex-col items-center justify-center w-60 flex-shrink-0">
                    <div className="w-44 h-44 bg-[#f1f2f2] rounded-full flex items-center justify-center mb-3">
                        <Image
                        src={"/img4.png"}
                        alt="image"
                        width={70}
                        height={70}
                        />
                    </div>
                    <h3 className="text-black text-[15px]">HAPPY CLIENTS</h3>
                    <p className="text-[11px] text-center">Lorem ipsum, dolor sit amet ipsum, dolor sit ametconsectetur adipisicing elit. Ex, quasi inventore!</p>
                </div>
                {/* //card 5 */}
                <div className="flex flex-col items-center justify-center w-60 flex-shrink-0 md:col-span-2 lg:col-span-1">
                    <div className="w-44 h-44 bg-[#f1f2f2] rounded-full flex items-center justify-center mb-3">
                        <Image
                        src={"/img5.png"}
                        alt="image"
                        width={80}
                        height={80}
                        />
                    </div>
                    <h3 className="text-black text-[15px]">SUPPORT</h3>
                    <p className="text-[11px] text-center">Lorem ipsum, dolor sit amet ipsum, dolor sit ametconsectetur adipisicing elit. Ex, quasi inventore!</p>
                </div>
            </div>
        </div>
    );
}

export default Advan;
