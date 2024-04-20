// import Image from "next/image";

import Image from "next/image";
import { DashboardNav } from "../dashboard/DashboardNav";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Baby, CalendarDays, MapPin, User } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FormBox } from "./_components/FormBox";
import Footer from "@/components/Footer";


export default function Title() {
  return (
    <>
      <DashboardNav />
      <div className="bg-gradient-to-bl from-rose-400 to-cyan-300  pt-20">
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
        <FormBox/>
{/* 
        <div className="  px-20">
          <h1 className="py-5 text-center font-bold text-3xl text-white">
            WOMEN RIGHTS PLEDGE
          </h1>
          <h2 className="font-semibold text-slate-200 text-2xl">
            Enter Basic Details
          </h2>
          <div className="">
            <div className="flex my-3">
              <User />
              <Label htmlFor="name" className="pl-1 text-lg ">
                Name
              </Label>
            </div>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <div className="flex my-3">
              <Baby />
              <Label htmlFor="name" className="text-lg pl-1">
                Gender{" "}
              </Label>
            </div>

            <RadioGroup defaultValue="comfortable" className="flex my-3 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Others</Label>
              </div>
            </RadioGroup>

            <div className="flex justify-evenly  items-center gap-5">
              <div className="w-full">
                <div className="flex my-3">
                  <CalendarDays />
                  <Label htmlFor="name" className="pl-1 text-lg ">
                    Date Of Birth
                  </Label>
                </div>
                <Input placeholder="Enter Your Date Of Birth" type="date" />
                <div className="w-full">
                  <div className="flex my-3">
                    <CalendarDays />
                    <Label htmlFor="name" className="pl-1 text-lg ">
                      Email
                    </Label>
                  </div>
                  <Input placeholder=" Enter Your Email Id" type="email" />
                </div>
              </div>

              <div className="w-full">
                <div className="flex my-3">
                  <MapPin />
                  <Label htmlFor="name" className="pl-1 text-lg ">
                    Pin Code
                  </Label>
                </div>
                <Input
                  type="number"
                  name="name"
                  id="name"
                  placeholder="Enter Your Pin Code"
                />

                <div className="w-full">
                  <div className="flex my-3">
                    <MapPin />
                    <Label htmlFor="name" className="pl-1 text-lg ">
                      Mobile
                    </Label>
                  </div>
                  <Input
                    type="number"
                    name="name"
                    id="name"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 my-5 font-semibold">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="font-semibold text-xl ">Accept terms and conditions</Label>
            </div>

            <Button className="w-full mb-5">Proceed For Language Selection</Button>


          </div>
        </div> */}

      </div>

      <Footer/>
    </>
  );
}
