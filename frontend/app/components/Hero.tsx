import hero from "./homepage-hero.png"
import { GoArrowRight } from "react-icons/go";
import PrimaryButton from "./buttons/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
export default function Hero() {
  return (
  <div className="flex justify-center w-full pt-[100px] ">  <div className="max-w-10/12"><div className=" flex sm:flex-row flex-col justify-center "><div className="flex flex-col">
    <div className="flex cursor-pointer items-center justify-between gap-0.5 text-sm bg-blue-100/50 p-1.5  w-64 rounded-full mb-5"> <div className="py-0.5 px-2.5 rounded-2xl border border-black ">New</div> Zapier Enterpris is here <GoArrowRight className="text-lg " /> </div>
        <div className="text-6xl font-extrabold mr-6">Ops run on Zapier—seamless workflows, no IT bottlenecks.</div>
        <div className="text-xl font-medium leading-8 mt-5 mr-9">Ops wants speed. IT wants oversight. Zapier’s AI automation gives everyone the best of both worlds with one place to build, manage, and govern workflows that power your business.</div>
   <div className=" mt-10"><div className="flex items-center w-full gap-5 "><div className=""><PrimaryButton size="big">Start free with email</PrimaryButton> </div>
   <div  className={`flex justify-center items-center "text-xl px-10 py-2.5 h-full gap-3  font-semibold  border text-black border-black/50 hover:cursor-pointer rounded-full hover:border-black hover:border-2 `}><FcGoogle className="text-xl" /> Start free with Google</div>
    </div> </div>
    </div><img className=" min-w-[400px] max-w-[540px] " src={hero.src}/></div>
    <div className="text-center">WHAT WILL YOU AUTOMATE TODAY?</div>
    </div></div>
  )
}
