import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Feedback() {
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
          <Link href={"/feedback"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Feedback
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Feedback</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="flex justify-center  gap-10 my-10">
          <div className="w-[60%]">
            <p className="text-muted-foreground mt-5">
              Thank You for visiting MyGov and becoming a stakeholder in the
              governance procedure of the country. We would like to hear from
              you about your experience and get your valued feedback on how we
              can make your participation in the governance process better.
            </p>
            <p className="text-muted-foreground mt-5">
              In case you are facing any problem regarding the registration or
              login process, please do get in touch with us through this form.
              We would be more than happy to get back to you and help in solving
              issues you may be faced while browsing and/or participating
              through MyGov, as we value your participation in MyGov
            </p>
            <p className="text-muted-foreground mt-5">
              Did not find your suggestions on the platform? Do not hesitate to
              get in touch with us with the same we will address your issue at
              the earliest as we value your participation in the MyGov Platform.
            </p>
            <p className="text-muted-foreground mt-5">
              For details you can visit the FAQ page.
            </p>
          </div>
          <div className="w-[40%] rounded-lg border border-muted-foreground h-[550px] p-5 shadow-2xl">
            <div className="flex flex-col gap-3 my-3">
              <Label>Name</Label>
              <Input placeholder="Enter Your Name" />
            </div>
            <div className="flex flex-col gap-3 my-3">
              <Label>Mobile No.</Label>
              <Input placeholder="Enter Your Mobile Number with country code ..." />
            </div>
            <div className="flex flex-col gap-3 my-3">
              <Label>Email *</Label>
              <Input placeholder="Enter Your Email" />
            </div>
            <div className="">
              <Label>Category *</Label>
              <Select>
                <SelectTrigger className="w-full mt-3">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Signup/Login</SelectItem>
                    <SelectItem value="banana">Task</SelectItem>
                    <SelectItem value="blueberry">Discussion</SelectItem>
                    <SelectItem value="grapes">MyGov Content</SelectItem>
                    <SelectItem value="pineapple">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3 my-3">
              <Label>Comments *</Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <Button className="w-full mt-3 bg-orange-300">Submit</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
