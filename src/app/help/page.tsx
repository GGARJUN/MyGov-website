import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Help() {
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
          <Link href={"/help"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Help
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Help</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="my-5">
          <h1 className="text-muted-foreground">
            Are you finding it difficult to access/navigate through the
            content/pages of this Portal? This section attempts to help you have
            a pleasant experience while browsing this Portal.
          </h1>

          <div className="flex justify-evenly items-center gap-10 mt-10">
            <div className="">
              <h1 className="text-center font-bold text-xl">
                Sections of this Portal
              </h1>
              <p className="text-center text-sm mt-4 text-muted-foreground">
                The Do and Discuss section provides information about all the
                tasks and discussions group wise.
              </p>
              <div className=" p-5 ml-5 mt-5 grid grid-cols-3 gap-10 border border-muted-foreground shadow-2xl rounded-lg h-[500px] w-[500px] ">
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/001-group.png"}
                    width={32}
                    height={32}
                    alt="loo"
                  />
                  <h1 className=" mt-2 font-semibold text-sm">Groups</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/002-completed-task.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Do(Task)</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/003-chat.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Discuss</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/004-polling.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Poll/Survey</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/005-blog.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Blog</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/006-microphone.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Talk</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/007-feedback.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Feedback</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/008-question.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">FAQ</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/009-info.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">About us</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/010-phone-call.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Contact us</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/011-sitemap.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm">Sitemap</h1>
                </div>
                <div className="flex flex-col justify-center items-center border border-muted-foreground rounded-md hover:bg-yellow-50">
                  <Image
                    src={"/help/012-terms.png"}
                    width={32}
                    height={52}
                    alt="loo"
                  />
                  <h1 className="mt-2 font-semibold text-sm ">Terms</h1>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-center font-bold text-xl">
                Promotional Banners
              </h1>
              <p className="text-center text-sm mt-4 text-muted-foreground">
                Promotional banners flashed on the MyGov are need to be of the
                following characteristics:
              </p>
              <div className=" mr-5 mt-5 p-5 border border-muted-foreground shadow-2xl rounded-lg h-[500px] w-[500px] ">
                <h1 className="font-semibold text-lg">File Formate:</h1>
                <div className="flex gap-5">
                  <div className="flex flex-col justify-start items-center mt-3">
                    <h1 className="font-medium mb-3">GIF</h1>
                    <Image
                      src={"/help/001-photo.png"}
                      width={52}
                      height={52}
                      alt="loo"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center mt-3">
                    <h1 className="font-medium mb-3">JPEG</h1>
                    <Image
                      src={"/help/002-jpg-file-format-variant.png"}
                      width={52}
                      height={52}
                      alt="loo"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center mt-3">
                    <h1 className="font-medium mb-3">PNG</h1>
                    <Image
                      src={"/help/003-png-file.png"}
                      width={52}
                      height={52}
                      alt="loo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-lg">
              Viewing Information in Various File Formats
            </h1>
            <p className="mt-4 tetx-sm text-muted-foreground">
              The information provided by this Web site is available in Portable
              Document Format (PDF), and also in html format. To view the
              information properly, your browser need to have the required
              plug-ins or software. For example, the pdf reader software is
              required to view the pdf format document. In case your system does
              not have this software, you can download it from the Internet for
              free.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-lg">Accessibility Help</h1>
            <p className="mt-4 tetx-sm text-muted-foreground">
              Use the accessibility options provided by this Web site to control
              the screen display. These options allow increasing the text size
              and changing the contrast scheme for clear visibility and better
              readability.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-lg">Changing the Text Size</h1>
            <p className="mt-4 tetx-sm text-muted-foreground">
              Changing the size of the text refers to making the text appearing
              smaller or bigger from its standard size. There are three options
              provided to you to set the size of the text that affects the
              readability. These are:
            </p>
          </div>
          <h1 className="my-3"><span className="font-bold">Large:</span> Displays information in the large font size.</h1>
          <h1><span className="font-bold">Medium:</span> Displays information in a standard font size, which is the default size.</h1>
          <h1 className="my-3"><span className="font-bold">Small:</span> Displays information in the small font size.</h1>
        </div>
      </div>
      <Footer/>
    </>
  );
}
