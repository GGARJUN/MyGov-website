import { ChevronRightCircleIcon, Download, Share } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function MyGovMeadia() {
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
              Media
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">MyGov Media</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="flex justify-between items-center gap-10">
          <iframe
            width="480"
            height="275"
            src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-2xl mt-10"
          ></iframe>
          <div className="w-[50%]">
            <h1 className="text-3xl text-muted-foreground">
              PM Modi's Vision: Empowering Indian Startups through Govt
              Initiatives | New India | Tech Podcast
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              MyGov In Conversation
            </p>

            <div className="flex justify-start gap-10 mt-10">
              <h2 className="flex gap-2 font-bold  text-lg text-muted-foreground">
                <Share />
                Share
              </h2>
              <h2 className="flex gap-2 font-bold  text-lg text-muted-foreground">
                <Download />
                Share
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>


          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="350"
              height="175"
              src="https://www.youtube.com/embed/JjvCI2ggTxk?si=svg1Cw0oa6PkaeH7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl mt-10"
            ></iframe>
            <div className="my-5 ">
              <h1 className="font-medium ">
                Empower Democracy Join the #MeraPehlaVoteDeshKeLiye Movement
              </h1>
              <span className="border border-muted-foreground flex my-3"></span>
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="text-muted-foreground">Explore More</h1>
                  <h1 className="text-muted-foreground">1 month 2 weeks</h1>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={"/icons/facebook.png"}
                    width={30}
                    height={20}
                    alt="vi"
                  />
                  <Image
                    src={"/icons/twitter.png"}
                    width={30}
                    height={30}
                    alt="vi"
                  />
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
