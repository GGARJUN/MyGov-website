import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Points() {
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
          <Link href={"/points"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Badges
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Badges</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="mt-10 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src={"/points/1.jpg"}
              width={800}
              height={300}
              alt="points"
            />
          </div>
          <h1 className="pl-44 mt-5 font-bold text-sm">
            KNOW MORE ABOUT MYGOV BADGES (PDF- 1.7 MB):{" "}
            <Link
              target="_blank"
              href={
                "https://static.mygov.in/static/s3fs-public/mygov_1701321025226699.pdf"
              }
            >
              <span className="bg-green-700 p-2 text-white hover:bg-green-800">
                BADGES OVERVIEW
              </span>
            </Link>
          </h1>

          <div className="flex justify-center items-center my-10">
            <Image
              src={"/points/2.png"}
              width={200}
              height={200}
              alt="points"
            />
            <Image
              src={"/points/3.png"}
              width={200}
              height={200}
              alt="points"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-sm text-blue-900 font-bold">CHANGE MAKER</h1>
            <p className="text-sm text-muted-foreground">
              Awarded to MyGov Change
            </p>
            <p className="text-sm text-muted-foreground">
              Maker by earning more than
            </p>
            <p className="text-sm text-muted-foreground">1,00,000 points.</p>
          </div>

          <span className="border border-muted-foreground flex my-10"></span>

          <h1 className="mx-60 mb-2 font-semibold text-muted-foreground">ENTHUSIAST - BADGE LEVEL</h1>

          <div className="mx-44 mb-10 flex justify-center items-center gap-2">
            <div>
              <Image
                src={"/points/4.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/4.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/4.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/4.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
          </div>

          <h1 className="mx-60 mb-2 font-semibold text-muted-foreground">ENTHUSIAST - BADGE LEVEL</h1>

          <div className="mx-44 mb-10 flex justify-center items-center gap-2">
            <div>
              <Image
                src={"/points/5.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/5.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/5.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/5.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
          </div>

          <h1 className="mx-60 mb-2 font-semibold text-muted-foreground">ENTHUSIAST - BADGE LEVEL</h1>

          <div className="mx-44 mb-10 flex justify-center items-center gap-2">
            <div>
              <Image
                src={"/points/6.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/6.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/6.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/6.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
          </div>

          <h1 className="mx-60 mb-2 font-semibold text-muted-foreground">ENTHUSIAST - BADGE LEVEL</h1>

          <div className="mx-44 mb-10 flex justify-center items-center gap-2">
            <div>
              <Image
                src={"/points/7.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/7.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/7.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
            <div>
              <Image
                src={"/points/7.png"}
                width={150}
                height={150}
                alt="points"
                className="bg-[#f9d4a9] p-5 rounded-sm"
              />
              <h1 className="text-sm font-bold my-3">ENTHUSIAST 1</h1>
              <p className="text-xs text-muted-foreground w-40 ">Awarded to MyGov Enthusiast 1 by earning upto 4999 points.</p>
            </div>
          </div>




        </div>
      </div>

      <Footer/>
    </>
  );
}
