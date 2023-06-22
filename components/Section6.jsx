import Image from "next/image";
import section6 from "/public/section6.png";

export default function Section6()
{
    return(
        <div className=" relative flex md:flex-row section6 flex-col justify-center h-full md:h-screen">
        <div className=" flex flex-col gap-8 pr-4 md:pr-0 pl-4 md:pl-12 md:items-start items-center">
        <p className=" text-center md:text-left text-2xl md:text-6xl font-extrabold pt-20 md:pt-52">Check out our Social Media <br>
        </br>handles for succesful collaborations</p>
        <button className=" bg-pink-900 text-white rounded-full text-center w-24 h-10 md:w-30 text-sm md:w-40 ">INSTAGRAM</button>
        <button className=" bg-blue-400 text-white rounded-full text-center w-24 h-10 md:w-30 text-sm md:w-40">LINKEDIN</button>
        </div>
        <div className=" pb-10 md:pb-0 md:pt-52 md:pr-8">
        <Image src={section6} width={450} height={450} />
        </div>
        </div>
    );
}
