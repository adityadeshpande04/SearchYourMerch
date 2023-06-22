import Image from "next/image";
import section2 from "/public/section2.png";
export default function Section2()
{
    return(
        <div className=" relative flex md:flex-row section2 flex-col justify-evenly h-full md:h-screen">
        <div className=" flex flex-col gap-8 pr-4 pl-4">
        <p className=" text-left text-2xl md:text-6xl font-extrabold text-blue-900 pt-20 md:pt-52">Experience <br>
        </br>Customisation at<br>
        </br>its finest</p>
        <p className=" text-blue-800 text-left text-sm">Search Your Merch is revolutionizing the way individuals and<br>
        </br> businesses discover and source high-quality merchandise.<br>
        </br> No complicated processes, no exorbitant fees.<br>
        </br> Find what you need, effortlessly.</p>
        <button className=" bg-blue-400 text-white rounded-full text-center w-24 md:w-30 text-sm md:w-40">Search Now</button>
        </div>
        <div className=" pb-10 md:pb-0 md:pt-36">
        <Image src={section2} style={{width:400, height:400,}}/>
        </div>
        </div>
    );
}