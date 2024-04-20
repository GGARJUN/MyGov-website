import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Image from "next/image";
import Header from "@/components/header";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";

function Pledge() {
  return (
    <>
      <DashboardNav />

      <div className="mt-20  ">
        <div>
          <h1 className="text-center font-bold text-5xl text-muted-foreground ">
            Latest Pledge
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Add your amazing subtitle here
          </p>
        </div>

        <div className=" p-5 h-96 mt-10  mx-10">
          <div className=" grid grid-cols-4 gap-14">
            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg  "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <Link href={'/takepledge'} target="_blank">
                <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                  Take Pledge
                </button>
              </Link>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-evenly mt-20 py-3 shadow-2xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-gray-600">
              208.59 <span className="text-lg items-center">+ Lakh</span>
            </h1>
            <h2 className="mt-2 text-muted-foreground font-normal text-lg">
              TOTAL PLEDGE TAKEN
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-gray-600">
              208.59 <span className="text-lg items-center">+ Lakh</span>
            </h1>
            <h2 className="mt-2 text-muted-foreground font-normal text-lg">
              TOTAL PLEDGE TAKEN
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-gray-600">
              208.59 <span className="text-lg items-center">+ Lakh</span>
            </h1>
            <h2 className="mt-2 text-muted-foreground font-normal text-lg">
              TOTAL PLEDGE TAKEN
            </h2>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-center font-bold text-5xl text-muted-foreground ">
            Ongoing Pledge
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Add your amazing subtitle here
          </p>
        </div>

        <div className=" p-5 h-96 mt-10  mx-10">
          <div className=" grid grid-cols-4 gap-14">
            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg  "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>

            <div className="px-2 pt-2 pb-4 border-2 border-muted-foreground shadow-2xl rounded-lg">
              <Image
                src={"/pledge1.webp"}
                alt="aaa"
                width={250}
                height={250}
                objectFit="cover"
                className="rounded-lg "
              />
              <div className="pt-4">
                <h1 className="font-bold text-muted-foreground text-lg">
                  Women Rights Pledge
                </h1>
                <h2 className="flex justify-end items-center pt-3 font-medium gap-3 text-lg ">
                  Share
                  <Share2 />
                </h2>
              </div>
              <button className="w-full mt-3 p-3 rounded-lg shadow-2xl hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 border-muted-foreground font-semibold  hover:text-white">
                Take Pledge
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[800px]"><Footer/></div>
    </>
  );
}

export default Pledge;
