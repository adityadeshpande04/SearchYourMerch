import Image from "next/image";
import section3_1 from "/public/section3-1.png";
import section3_2 from "/public/section3-2.png";
import section3_3 from "/public/section3-3.png";

export default function Section3()
{
    return(
        <div className=" relative flex flex-col gap-6 md:gap-12 justify-center h-full md:h-screen section3">
            <p className="text-center md:pt-3 pt-6 text-xs md:text-base text-pink-900">WHY PARTNER WITH SEARCH YOUR MERCH</p>
            <p className="text-center text-3xl md:pb-10 font-bold text-pink-900">Discover the complete personalisatoin <br>
            </br>tailored to suit your style</p>
            <div className=" flex md:flex-row flex-col md:gap-10 gap-4 md:justify-evenly items-center md:pb-0 pb-8 md:pr-0 md:pl-0 pr-8 pl-8">
            <div className=" flex flex-col md:gap-4 gap-1">
            <Image src={section3_1} width={200} height={200} />
            <p className="text-center text-pink-900">Pan-India Delivery<br>
            </br>No matter where you are,<br>
            </br> we've got you covered.</p>
            </div>
            <div className=" flex flex-col md:gap-6 gap-1">
            <Image src={section3_2} width={230} height={200} />
            <p className="text-center text-pink-900">Guaranteed Customer Satisfaction<br>
            </br>Premium Materials &<br>
            </br>Value for Money</p>
            </div>
            <div className=" flex flex-col md:gap-6 gap-4 md:pt-8">
            <Image src={section3_3} width={200} height={200} />
            <p className="text-center text-pink-900">Anytime, Anywhere Access<br>
            </br>Hassle-free navigation through<br>
            </br> our platform at your fingertips</p>
            </div>
            </div>
        </div>
    );
}