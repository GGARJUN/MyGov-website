import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/Footer";
function OurTeam() {
  return (
    <>
      <DashboardNav />
      <div className="mt-16">
        <h1 className="text-center font-bold text-5xl text-muted-foreground ">
          Our Team
        </h1>
        <p className="text-gray-600 text-center mt-4">
          Add your amazing subtitle here
        </p>
        
        <div className="grid grid-rows-1 md:grid-cols-2 gap-5 px-20 py-10 ">
          <div className="shadow-xl border-1 border-muted-foreground bg-gradient-to-r from-violet-200 to-pink-200 rounded-l-2xl h-44 w-full">
            <div className="flex items-center  gap-20  ">
              <div className="h-44 w-44 bg-slate-800 rounded-2xl flex justify-center items-center ">
                <Image
                  src="/team/profile.jpeg"
                  alt="Profile picture"
                  width={173}
                  height={100}
                  className=" rounded-2xl object-cover"
                />
              </div>
              <div>
                <h1 className="font-bold text-3xl">Name Name</h1>
                <h1 className="font-medium text-lg text-muted-foreground text-center">
                  Team Leader
                </h1>
                <div className="flex items-center justify-center gap-5 mt-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/instagram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/linkedin.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/telegram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border-1 border-muted-foreground bg-gradient-to-r from-teal-400 to-yellow-200 rounded-l-2xl h-44 w-full">
            <div className="flex items-center  gap-20  ">
              <div className="h-44 w-44 bg-slate-800 rounded-2xl flex justify-center items-center ">
                <Image
                  src="/team/profile.jpeg"
                  alt="Profile picture"
                  width={173}
                  height={100}
                  className=" rounded-2xl object-cover"
                />
              </div>
              <div>
                <h1 className="font-bold text-3xl">Name Name</h1>
                <h1 className="font-medium text-lg text-muted-foreground text-center">
                  Team Leader
                </h1>
                <div className="flex items-center justify-center gap-5 mt-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/instagram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/linkedin.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/telegram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border-1 border-muted-foreground bg-gradient-to-r from-violet-200 to-pink-200 rounded-l-2xl h-44 w-full">
            <div className="flex items-center justify-between  gap-20  ">
             
              <div className="ml-20">
                <h1 className="font-bold text-3xl">Name Name</h1>
                <h1 className="font-medium text-lg text-muted-foreground text-center">
                  Team Leader
                </h1>
                <div className="flex items-center justify-center gap-5 mt-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/instagram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/linkedin.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/telegram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                </div>
              </div>
               <div className="h-44 w-44 bg-slate-800 rounded-2xl flex justify-center items-center ">
                <Image
                  src="/team/profile.jpeg"
                  alt="Profile picture"
                  width={173}
                  height={100}
                  className=" rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="shadow-xl border-1 border-muted-foreground bg-gradient-to-r from-violet-200 to-pink-200 rounded-l-2xl h-44 w-full">
            <div className="flex items-center justify-between  gap-20  ">
             
              <div className="ml-20">
                <h1 className="font-bold text-3xl">Name Name</h1>
                <h1 className="font-medium text-lg text-muted-foreground text-center">
                  Team Leader
                </h1>
                <div className="flex items-center justify-center gap-5 mt-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/instagram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/linkedin.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                  <Image
                    src={"/icons/telegram.png"}
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                </div>
              </div>
               <div className="h-44 w-44 bg-slate-800 rounded-2xl flex justify-center items-center ">
                <Image
                  src="/team/profile.jpeg"
                  alt="Profile picture"
                  width={173}
                  height={100}
                  className=" rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default OurTeam;
