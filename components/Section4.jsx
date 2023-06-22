import Image from "next/image";
import section4 from "/public/section4.png";

export default function Section4()
{
    return(
        <div className=" flex flex-col section4 md:gap-24 h-full md:h-screen justify-center">
        <p className=" text-3xl pt-6 md:pt-0 md:text-6xl font-bold text-center text-blue-900">Your partner for smart Savings</p>
        <div className="flex flex-col md:flex-row justify-evenly">
        <div>
        <Image src={section4} width={400} height={400} />
        </div>
        <div className=" flex flex-col justify-center pb-8 items-center md:items-start md:pb-0">
       <p className="text-blue-900 text-lg font-bold pt-10 text-center md:text-left pb-6">Discover the power of smart savings with<br>
       </br>Search Your Merch – Your ultimate <br>
       </br>merchandise partner, optimizing your time,<br>
       </br> energy, and money.</p>
       <button className="bg-blue-400 text-white rounded-full w-36 h-12 md:w-30 text-xs md:w-40">Connect with Experts</button>
        </div>
        </div>
        </div>
    );
}