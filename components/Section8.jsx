import Image from "next/image";
import section8 from "/public/section8.png";

export default function Section8()
{
    return(
        <div className=" section8 flex flex-col gap-6 justify-center h-full md:h-screen items-center pb-8 md:pb-0">
        <div className=" items-center pt-8 md:pt-0">
            <Image src={section8} width={500} height={500} />
        </div>
        <p className=" font-bold text-4xl text-center pt-4 md:pt-0">Partner with Search Your Merch Today</p>
        <button className=" bg-pink-300 rounded-full text-center w-24 h-10 md:w-30 text-sm md:w-40 ">Discover How</button>
        </div>
    );
}