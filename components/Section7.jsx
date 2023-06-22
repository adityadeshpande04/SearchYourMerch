import Image from "next/image";
import section7 from "/public/section7.png";

export default function Section7()
{
    return(
        <div className=" relative flex md:flex-row section7 flex-col justify-evenly h-full md:h-screen">
        <div className=" pb-6 md:pb-0 md:pt-36 pt-6">
        <Image src={section7} style={{width:400, height:400,}}/>
        </div>
        <div className=" flex flex-col gap-8 pr-4 pl-4">
        <p className=" md:text-left text-center text-2xl md:text-5xl font-bold text-white md:pt-52">Seamless Integration of<br>
        </br>Style and Convenience<br>
        </br>its finest</p>
        <p className=" text-white md:text-left text-center text-sm md:text-base md:pb-0 pb-8">We understand that time is precious. Our user-friendly<br>
        </br> platform and talented designers make it effortless to create<br>
        </br> and customize your merchandise. Say goodbye to <br>
        </br>complicated processes and hello to a streamlined experience.</p>
        </div>
        </div>
    );
}