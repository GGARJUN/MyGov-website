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
              Talk
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Closed Talks Under MyGov</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="grid grid-cols-3 gap-3 my-8">
          <div className="border border-muted-foreground p-2 rounded-md">
            <Image src={"/talk/1.png"} width={350} height={200} alt="group" />

            <h1 className="mt-1 font-semibold text-base">
              Global Cyber Challenge 2017 - Grand Finale
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Global Cyber Challenge is an important part of Global Conference
              on Cyber Space (GCCS), 2017 being inaugurated by the ...
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
              Last Date Feb 11,2019 00:00 AM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[100%]">Make Contribute</Button>
          </div>

          <div className="border border-muted-foreground p-2 rounded-md">
            <Image src={"/talk/2.png"} width={350} height={200} alt="group" />

            <h1 className="mt-1 font-semibold text-base">
            Global Cyber Challenge 2017 - Grand Finale
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Global Cyber Challenge is an important part of Global Conference on Cyber Space (GCCS), 2017 being inaugurated by the ...
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Last Date Feb 11,2019 00:00 AM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[100%]">Make Contribute</Button>
          </div>
          <div className="border border-muted-foreground p-2 rounded-md">
            <Image src={"/talk/3.png"} width={350} height={200} alt="group" />

            <h1 className="mt-1 font-semibold text-base">
            Global Cyber Challenge 2017 - Grand Finale
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Global Cyber Challenge is an important part of Global Conference on Cyber Space (GCCS), 2017 being inaugurated by the ...
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Last Date Feb 11,2019 00:00 AM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[100%]">Make Contribute</Button>
          </div>
          <div className="border border-muted-foreground p-2 rounded-md">
            <Image src={"/talk/3.png"} width={350} height={200} alt="group" />

            <h1 className="mt-1 font-semibold text-base">
            Global Cyber Challenge 2017 - Grand Finale
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Global Cyber Challenge is an important part of Global Conference on Cyber Space (GCCS), 2017 being inaugurated by the ...
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Last Date Feb 11,2019 00:00 AM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[100%]">Make Contribute</Button>
          </div>
          <div className="border border-muted-foreground p-2 rounded-md">
            <Image src={"/talk/3.png"} width={350} height={200} alt="group" />

            <h1 className="mt-1 font-semibold text-base">
            Global Cyber Challenge 2017 - Grand Finale
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Global Cyber Challenge is an important part of Global Conference on Cyber Space (GCCS), 2017 being inaugurated by the ...
            </h1>
            <h1 className="mt-1 text-sm text-muted-foreground">
            Last Date Feb 11,2019 00:00 AM IST (GMT +5.30 Hrs)
            </h1>
            <Button className="my-2 w-[100%]">Make Contribute</Button>
          </div>



        </div>
      </div>
      <Footer/>
    </>
  );
}
