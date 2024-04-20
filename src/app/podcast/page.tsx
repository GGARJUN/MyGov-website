import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Audio from "./Audio";
import Footer from "@/components/Footer";

export default function PodCast() {
  return (
    <>
      <div>
        <DashboardNav />
      </div>
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
              Talk
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">PodCast</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="my-3">
          <div className="flex justify-between">
            <h1 className="text-sm">Podcast By Author</h1>
            <h2 className="text-sm">See All</h2>
          </div>
          <div className="flex justify-evenly items-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/1.jpg"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                Ashwin Sanghi
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/2.png"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                Vikram Sampath
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/3.jpg"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                Chetan Bhagat
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/4.jpg"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                All India Radio
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/5.jpg"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                Mohfw
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="hover:bg-slate-300 flex items-center justify-center p-5 py-8 rounded-full">
                <Image
                  src={"/podcast/2.png"}
                  alt="pod"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-sm font-semibold text-muted-foreground hover:text-black">
                MyGov
              </h1>
            </div>
          </div>

          <span className="border border-muted-foreground flex mt-5"></span>

          <div className="flex justify-between my-5 ">
            <h1 className="font-semibold">Azadi Ka Amrit Mahotsav</h1>
            <h2 className="text-sm">See All</h2>
          </div>

          <div>
            <Audio />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
