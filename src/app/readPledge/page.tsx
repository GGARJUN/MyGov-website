"use client";
import React from "react";
import Image from "next/image";
import { DashboardNav } from "../dashboard/DashboardNav";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="bg-gradient-to-bl from-rose-400 to-cyan-300  py-20">
        <Image
          src={"/pledge/mygov.png"}
          width={300}
          height={100}
          alt="Profile Picture"
        />
        <Image
          src={"/pledge/banner.jpg"}
          width={1500}
          height={800}
          alt="Profile Picture"
        />
        <h1 className="py-5 text-center font-bold text-3xl  ">
          {" "}
          WOMEN RIGHTS PLEDGEs
        </h1>
        <div className="px-40 py-5 font-medium text-lg h-60">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "I do hereby solemnly pledge to protect and promote the rights of all women, at all times. I shall not, directly or indirectly, through my actions, words or deeds violate the rights of any woman."
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
        <div className="flex justify-center items-center">
        <Link href={'/dashboard'}>
          <Button>Home</Button>
        </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
