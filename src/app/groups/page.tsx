import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Groups() {
  return (
    <>
      <DashboardNav />
      <div className="pt-20 mx-10">

        <div className="flex gap-5">
          <Link href={"/dashboard"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Home
            </h1>
          </Link>
          <ChevronRightCircleIcon className="text-muted-foreground hover:text-blue-800 cursor-pointer"/>
          <Link href={"/groups"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Groups
            </h1>
          </Link>
        </div>


        <h1 className="font-medium text-lg my-5">All Groups Udnder MyGov</h1>
        <span className="border border-muted-foreground flex"></span>


        <div className="grid grid-cols-3 gap-3 my-8">

          <div className="">
            <Image src={"/group/1.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">Ministry of Finance</h1>
            <h1 className="mt-1 text-muted-foreground">Ministry of Finance</h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>

          <div className="">
            <Image src={"/group/2.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">Ministry of Electronics and Information Technology</h1>
            <h1 className="mt-1 text-muted-foreground">Ministry of Electronics and Information Technology</h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>

          <div className="">
            <Image src={"/group/3.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">LiFE-21 Day Challenge</h1>
            <h1 className="mt-1 text-muted-foreground">LiFE-21 Day Challenge</h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>

          <div className="">
            <Image src={"/group/4.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">The Ministry of Environment, Forest and Climate Change </h1>
            <h1 className="mt-1 text-muted-foreground">The Ministry of Environment, Forest and Climate Change (MoEFCC) </h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>

          <div className="">
            <Image src={"/group/5.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">Ministry of Finance</h1>
            <h1 className="mt-1 text-muted-foreground">India is a unique nation, whose fabric has been woven by diverse linguistic, cultural and religious threads, held together into a</h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>

          <div className="">
            <Image src={"/group/6.jpg"} width={350} height={200} alt="group" />
            <h1 className="mt-1 font-semibold text-lg">Ministry of Finance</h1>
            <h1 className="mt-1 text-muted-foreground">It has been seventy years since Mahatma Gandhi departed from our midst.</h1>
            <div className="flex  items-center my-2">
              <h1 className="font-bold text-sm">More...</h1>
              <div className="flex gap-2 pl-60">
                <Image src={'/icons/facebook.png'} width={20} height={20} alt="group" />
                <Image src={'/icons/twitter.png'} width={20} height={20} alt="group" />
              </div>
            </div>
          </div>



        </div>



      </div>

      <Footer/>
    </>
  );
}
