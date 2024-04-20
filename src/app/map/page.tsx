import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SiteMap() {
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
          <Link href={"/map"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Site-Map
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5"> Site-Map</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="mt-10">
          <div className="flex justify-between items-center ">
            <div className="p-5 bg-rose-500 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">Activities</h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Groups
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">Do</p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Discss
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Poll & Survey
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Blog
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Campaigns
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Podcast
                  </p>
                </Link>
              </div>
            </div>
            <div className="p-5 bg-orange-500 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">Get to Know</h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    About MyGov
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Work at MyGov
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Associate with MyGov
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    MyGov Media
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    MyGov Tenders
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Weekly Newsletter
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Points & Badges
                  </p>
                </Link>
              </div>
            </div>
            <div className="p-5 bg-green-600 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">
                Help & Support
              </h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Help
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Site Map
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Usage of Aadhaar
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Link to us
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Web Information Manager
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">FAQ</p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Terms & Conditions
                  </p>
                </Link>
              </div>
            </div>
            <div className="p-5 bg-blue-500 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">
                Login/Register
              </h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Register User
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    User login
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-10 items-center my-10 ">
            <div className="p-5 bg-violet-500 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">Microsites</h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Blog
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Campus
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Innovate India
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Pledge
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Self4Society
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Transforming India
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Saathi
                  </p>
                </Link>
              </div>
            </div>
            <div className="p-5 bg-green-500 rounded-2xl w-[250px] h-80">
              <h1 className="text-white font-bold text-lg mb-3">Other Links</h1>
              <div className="flex flex-col gap-2">
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Home
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Data Portal
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    Digital India
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    India Covid-19
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    MeitY
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    National Portal of India
                  </p>
                </Link>
                <Link href={""}>
                  <p className="text-white font-medium hover:border-b-2">
                    PM INDIA
                  </p>
                </Link>
              </div>
            </div>
            <div className="p-5 bg-rose-500 rounded-2xl  w-[50%] h-80">
              <div className="flex justify-start gap-10 items-center ">
                <div>
                  <h1 className="text-white font-bold text-lg mb-3">
                    States Links
                  </h1>
                  <div className="flex flex-col gap-2">
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Assam
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Tamilnadu
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Goa
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Gujarat
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Haryana
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Jharkhand
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Karnataka
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 mt-10">
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Kerala
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Manipur
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Mizoram
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Nagaland
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Odisha
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Punjab
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className="text-white font-medium hover:border-b-2">
                        Rajasthan
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
