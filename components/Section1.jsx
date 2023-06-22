import Image from "next/image";
import section1 from "/public/section1-removebg-preview.png";
export default function Section1()
{
    return(
        <div className=" relative flex flex-row section1 justify-evenly h-full md:h-screen">
        <div className=" flex flex-col gap-8 pr-4 pl-4">
        <p className=" text-left text-3xl md:text-8xl font-extrabold text-orange-400 pt-20 md:pt-40">Search Your <br>
        </br>Merch</p>
        <button className=" bg-pink-400 text-white rounded-full text-center w-20 text-sm md:w-40">Learn more</button>
        </div>
        <div className="md:pt-20">
        <Image className=" md:w-300 md:h-100 " src={section1}/>
        </div>
        </div>
    );
}