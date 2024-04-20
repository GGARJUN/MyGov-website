import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Champaigns() {
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
          <Link href={"/champaings"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Champaigns
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">All Campaigns</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="grid grid-cols-3 gap-3 my-8 ">
          
          <div className="">
            <Image src={"/champaings/1.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/2.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/3.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>

          <div className="">
            <Image src={"/champaings/4.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/5.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/6.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/7.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/8.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>
          <div className="">
            <Image src={"/champaings/9.jpg"} width={350} height={200} alt="group" />
            <h1 className="my-3 text-muted-foreground">
              Healthcare practices advocated by Ayush systems (namely Ayurveda,
              Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy) are
              known to promote general wellness. In fact, they exert a positive
              impact both on the mind
            </h1>
            <Button className="w-[95%]">View</Button>
          </div>


        </div>
      </div>
      <Footer/>
    </>
  );
}
