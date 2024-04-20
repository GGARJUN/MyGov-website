"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Copy,  Share } from "lucide-react";
import OurTeam from "../ourTeam/page";
import { DashboardNav } from "../dashboard/DashboardNav";
import Footer from "@/components/Footer";


function Hero() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int); //
  }, [setPage]);

  return (
    <>
    <DashboardNav/>
      <div className="mt-16  h-screen  ">
        <div>
          <Image
            src={`/slider${page}.jpg`}
            alt="Logo"
            width={1400}
            height={50}
          />
        </div>

        <div className="md:h-28 border-b-1 shadow-xl w-full sm:flex items-center justify-evenly  ">
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">4,37,25,280</h2>
            <p className="text-[11px]">MYGOV SAATHIS</p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">15.26 + Lakh</h2>
            <p className="text-[11px]">SUBMISSION IN TASKS</p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">54.91 + Lakh</h2>
            <p className="text-[11px]">COMMENTS IN DISCUSSIONS</p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">35.58 + Lakh</h2>
            <p className="text-[11px]">VOTES IN POLLS</p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">256.15 + Lakh</h2>
            <p className="text-[11px]">PARTICIPATION IN QUIZ</p>
          </div>
          <div className="flex flex-col justify-center gap-1 items-center ">
            <h2 className="font-bold text-xl text-slate-500">208.48 + Lakh</h2>
            <p className="text-[11px]">PLEDGES TAKEN</p>
          </div>
        </div>

        <div className="mt-14 px-5">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            GET INVOLVED
          </h1>
          <p className="font-medium text-muted-foreground text-lg">
            Participate in nation-building activities
          </p>
        </div>

        <div className="flex justify-between px-5 items-center gap-5 w-full h-40 bg-slate-100 mt-3">
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
          <div className=" px-3 pt-3 shadow-lg border-5 rounded-sm bg-white hover:border-2 hover:border-green-400">
            <div className="rounded-sm bg-green-200 px-5 py-5  hover:bg-green-300">
              <Image src={"/check.png"} alt="check" width={50} height={50} />
            </div>
            <h2 className="text-center font-semibold text-sm text-muted-foreground my-1">
              DO/TASK
            </h2>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-500 w-full h-[600px] mt-10 flex gap-10 items-center px-20">
          <div className="w-[450px] text-end">
            <p className="text-7xl text-gray-700">WHAT'S</p>
            <h1 className="text-7xl font-black text-gray-700">NEW</h1>
          </div>
          <div className="">
            <Image
              src={`/what_${page}.png`}
              alt="Logo"
              width={700}
              height={50}
            />
          </div>
        </div>

        <div className="mt-10 relative  -z-50">
          <div className="flex flex-col justify-center items-center text-3xl  text-gray-700 font-bold">
            <h2>Follow the MyGov India </h2>
            <h2>channel on WhatsApp</h2>
          </div>
          <div className="mt-16 flex ">
            <Image
              src={"/whatsapp.png"}
              alt="whatsapp"
              height={800}
              width={500}
            />
            <div className="flex justify- items-center gap-40 -z-50 absolute left-[750px]">
              <div>
                <div className="p-8  bg-green-600 rounded-full shadow-xl">
                  <Copy height={30} width={30} className="text-white " />
                </div>
                <h2 className="pt-2 font-semibold text-muted-foreground text-center ">
                  COPY LINK
                </h2>
              </div>
              <div>
                <div className="p-8  bg-green-600  rounded-full shadow-2xl">
                  <Share height={30} width={30} className="text-white " />
                </div>
                <h2 className="pt-2 font-semibold text-muted-foreground text-center ">
                  SHARE LINK
                </h2>
              </div>
            </div>
            <div className="absolute top-[300px] left-[840px]">
              <Image
                src={"/qrcode.png"}
                height={200}
                width={200}
                alt="qrcode"
                className=" rounded-lg shadow-2xl "
              />
              <div className="flex justify-center items-center mt-10 bg-green-500 hover:text-white hover:bg-green-700 w-full py-3 rounded-full">
                <button className="font-semibold text-xl  ">Follow</button>
              </div>
              <h2 className="text-center text-lg mt-2 text-muted-foreground">
                Join And Get Updated
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 w-full mt-10 px-5">
          <div className="p-10 shadow-2xl border-2 border-grey-200">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Our Social HUB
            </h1>
            <p className="font-medium text-muted-foreground text-lg my-2">
              Join Our Social Hub to stay up to date
            </p>
            <Image src={"/hero1.jpg"} alt="hero" width={700} height={700} />
            <p className="font-medium text-muted-foreground text-md mt-3">
              Join Our Social Hub to stay up to date
            </p>
          </div>
          <div className="p-10 shadow-2xl border-2 border-grey-200">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Our Social HUB
            </h1>
            <p className="font-medium text-muted-foreground text-lg my-2">
              Join Our Social Hub to stay up to date
            </p>
            <Image src={"/hero1.jpg"} alt="hero" width={700} height={700} />
            <p className="font-medium text-muted-foreground text-md mt-3">
              Join Our Social Hub to stay up to date
            </p>
          </div>
        </div>

        <div>
          <div className=" text-center mt-10">
            <p className="text-7xl text-gray-500 font-extralight">MyGov</p>
            <h1 className="text-7xl font-black text-gray-700">Prime</h1>
          </div>
          <div className="flex justify-evenly items-center px-5 gap-10 mt-10">
            <Image src="/prime.png" alt="prime logo" width={600} height={600} />
            <div className="grid grid-cols-2 gap-10">
              <div>
                <Image
                  src="/prime1.jpg"
                  alt="tag icon"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                <h2 className="font-semibold text-gray-700 px-3 text-lg">
                  Shikshak Parv 2022
                </h2>
                <p className="text-muted-foreground px-3">
                  Last Date: 05/09/2024
                </p>
              </div>
              <div>
                <Image
                  src="/prime2.jpg"
                  alt="tag icon"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                <h2 className="font-semibold text-gray-700 px-3 text-lg">
                  India Pitch Pilot Scale Startup Challenge
                </h2>
                <p className="text-muted-foreground px-3">
                  Last Date: 20/11/2024
                </p>
              </div>
              <div>
                <Image
                  src="/prime3.jpg"
                  alt="tag icon"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                <h2 className="font-semibold text-gray-700 px-3 text-lg">
                  CSIR Societal Platform 2024
                </h2>
                <p className="text-muted-foreground px-3">
                  Last Date: 31/12/2024
                </p>
              </div>
              <div>
                <Image
                  src="/prime4.jpg"
                  alt="tag icon"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                <h2 className="font-semibold text-gray-700 px-3 text-lg">
                  Dekho Apna Desh, People’s Choice 2024
                </h2>
                <p className="text-muted-foreground px-3">
                  Last Date: 30/04/2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          {/* <div className=" text-center mt-20">
            <p className="text-7xl text-gray-500 font-extralight">MyGov</p>
            <h1 className="text-7xl font-black text-gray-700">Prime</h1>
          </div> */}
          <div className="flex justify-evenly items-center px-5 gap-10 mt-10">
            <div className="flex justify-center items-center flex-col">
              <Image
                src="/pledge.png"
                alt="prime logo"
                width={400}
                height={400}
              />

              <p className="text-7xl text-gray-500 font-extralight text-center">
                I Took The
              </p>
              <h1 className="text-7xl font-black text-gray-700 text-center">
                Pledge
              </h1>
              <p className="mt-2 text-muted-foreground text-center">
                Come on, let's make a commitment
              </p>
            </div>
            <div>
              <h1 className="mb-5 font-bold text-muted-foreground text-xl">
                Most Active Pledge
              </h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Image
                    src="/pledge1.webp"
                    alt="tag icon"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <h2 className="font-semibold text-gray-700 px-3 text-lg">
                    Women Rights Pledge
                  </h2>
                </div>
                <div>
                  <Image
                    src="/pledge2.webp"
                    alt="tag icon"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <h2 className="font-semibold text-gray-700 px-3 text-lg">
                    Panch Pran Pledge
                  </h2>
                </div>
                <div>
                  <Image
                    src="/pledge3.webp"
                    alt="tag icon"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <h2 className="font-semibold text-gray-700 px-3 text-lg">
                    Road Safety Pledge 2024
                  </h2>
                </div>
                <div>
                  <Image
                    src="/pledge4.webp"
                    alt="tag icon"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <h2 className="font-semibold text-gray-700 px-3 text-lg">
                    Energy Conservation Pledge
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 px-5">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Our Social HUB
          </h1>
          <p className="font-medium text-muted-foreground text-lg">
            Join Our Social Hub to stay up to date
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5 w-full px-5 my-8 cursor-pointer ">
          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100 ">
            <Image
              src={"/icons/whatsapp.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/messenger.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/facebook.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/telegram.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/instagram.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/twitter.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/linkedin.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/youtube.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/pinterest.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/whatsapp.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/whatsapp.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-8 py-5 border border-gray-500 shadow-xl rounded-md hover:bg-green-100">
            <Image
              src={"/icons/whatsapp.png"}
              alt="no"
              width={40}
              height={40}
            />
            <div>
              <h1 className="font-bold mt-2">910.05 + Lakh</h1>
              <p className="text-muted-foreground">Followers</p>
              <h2 className="text-lg font-bold text-green-700">WhatsApp</h2>
            </div>
          </div>

        </div>

      </div>

      <div className="absolute top-[5000px] w-full">
        <Footer/>
      </div>
    </>
  );
}

export default Hero;
