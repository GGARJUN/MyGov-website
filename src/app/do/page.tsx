import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Do() {
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
          <ChevronRightCircleIcon className="text-muted-foreground hover:text-blue-800 cursor-pointer" />
          <Link href={"/do"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Do
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Open Tasks Under MyGov</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="grid grid-cols-3 gap-3 my-8">
          <div className="">
            <Image src={"/do/1.jpg"} width={350} height={200} alt="group" />
            <div className="flex  items-center my-2">
              <h1 className="font-light text-sm">Status :</h1>
              <button className="ml-2 px-1 text-sm bg-green-700 rounded-sm font-medium text-white">
                Open
              </button>
              <div className="flex gap-2 pl-48">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
            <h1 className="mt-1 font-semibold text-base">
              Ministry of Finance
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Apr 15,2024 23:45 PM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[95%]">Make Contribute</Button>
          </div>

          <div className="">
            <Image src={"/do/2.jpg"} width={350} height={200} alt="group" />
            <div className="flex  items-center my-2">
              <h1 className="font-light text-sm">Status :</h1>
              <button className="ml-2 px-1 text-sm bg-green-700 rounded-sm font-medium text-white">
                Open
              </button>
              <div className="flex gap-2 pl-48">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
            <h1 className="mt-1 font-semibold text-base">
              Ministry of Finance
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Apr 15,2024 23:45 PM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[95%]">Make Contribute</Button>
          </div>

          <div className="">
            <Image src={"/do/3.jpg"} width={350} height={200} alt="group" />
            <div className="flex  items-center my-2">
              <h1 className="font-light text-sm">Status :</h1>
              <button className="ml-2 px-1 text-sm bg-green-700 rounded-sm font-medium text-white">
                Open
              </button>
              <div className="flex gap-2 pl-48">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
            <h1 className="mt-1 font-semibold text-base">
              Ministry of Finance
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Apr 15,2024 23:45 PM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[95%]">Make Contribute</Button>
          </div>

          <div className="">
            <Image src={"/do/4.jpg"} width={350} height={200} alt="group" />
            <div className="flex  items-center my-2">
              <h1 className="font-light text-sm">Status :</h1>
              <button className="ml-2 px-1 text-sm bg-green-700 rounded-sm font-medium text-white">
                Open
              </button>
              <div className="flex gap-2 pl-48">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
            <h1 className="mt-1 font-semibold text-base">
              Ministry of Finance
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Apr 15,2024 23:45 PM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[95%]">Make Contribute</Button>
          </div>

          <div className="">
            <Image src={"/do/5.png"} width={350} height={200} alt="group" />
            <div className="flex  items-center my-2">
              <h1 className="font-light text-sm">Status :</h1>
              <button className="ml-2 px-1 text-sm bg-green-700 rounded-sm font-medium text-white">
                Open
              </button>
              <div className="flex gap-2 pl-48">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
            <h1 className="mt-1 font-semibold text-base">
              Ministry of Finance
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Apr 15,2024 23:45 PM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[95%]">Make Contribute</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
