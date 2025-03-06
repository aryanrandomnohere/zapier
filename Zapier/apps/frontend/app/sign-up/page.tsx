"use client"
import { TbCircleCheckFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function page() {
    const [email,setEmail] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
  return (
    <div className="flex justify-center items-center mt-[100px] gap-20 ">
    <div className="flex flex-col  max-w-[400px] gap-5"> <div className="text-3xl font-bold leading-10">Join millions worldwide who automate their work using Zapier.</div>
    <div> <div className="flex gap-2 items-center text-sm font-medium">
        <TbCircleCheckFilled className="text-green-700 text-xl " /> Easy setup, no coding required</div>
        </div>
        <div> <div className="flex gap-2 items-center text-sm font-medium">
        <TbCircleCheckFilled className="text-green-700 text-xl " /> Free forever for core features</div>
        </div>
        <div> <div className="flex gap-2 items-center text-sm font-medium">
        <TbCircleCheckFilled className="text-green-700 text-xl  " />14-day trial of premium features & apps</div>
        </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[450px]  border border-black/10 p-6">
        <div className="flex items-center min-w-[390px] p-2 bg-blue-500/90 rounded hover:bg-blue-600 transition-all duration-500 cursor-pointer w-60 text-center justify-between">
        <div className="bg-white p-0.5 rounded text-sm"><FcGoogle className="text-2xl" /></div>
  <div className="flex items-center gap-2 flex-grow justify-center">
    <div className="text-sm font-extrabold text-white">Sign up with Google</div>
  </div>
</div>
<div className="flex items-center justify-center ">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-2 text-gray-500 font-bold text-sm">OR</span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>
<div className="text-sm">* Indicates a required field.</div>
<Input value={email} onChange={setEmail} label="* Work email" placeholder=""/>
<Input value={firstname} onChange={setFirstname} label="* First name" placeholder=""/>
<Input value={lastname} onChange={setLastname} label="* Last name" placeholder=""/>
<div className="text-sm font-medium">By signing up, you agree to Zapier's <a className="text-blue-700 underline" href="https://zapier.com/legal">terms of service and privacy policy.</a></div>
<PrimaryButton size="small"> Get started for free</PrimaryButton>
<div className="text-sm font-medium text-center">Already have an account? <a className="text-blue-700 underline">Log in</a></div>
</div>
        
        </div>
  )
}
