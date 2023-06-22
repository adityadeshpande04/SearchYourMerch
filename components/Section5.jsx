import Image from "next/image";
import section5 from "/public/section5.png";

export default function Section5()
{
    return(
        <div className=" section5 flex flex-col gap-6 justify-center h-full md:h-screen items-center">
        <p className=" font-bold text-4xl text-center pt-4 md:pt-0">Crafted with Care</p>
        <p className=" font-semibold text-base md:text-2xl text-center">Whether you're a business, organization, or college, our collaboration program is designed to <br>
        </br>help you thrive. Collaborate with our talented designers to create exclusive merchandise that<br>
        </br> aligns with your brand or message</p>
        <div className=" items-center pb-4 md:pb-0">
            <Image src={section5} width={400} height={400} />
        </div>
        </div>
    );
}