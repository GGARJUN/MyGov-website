import Image from "next/image";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function about() {
  return (
    <>
      <DashboardNav />
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 pt-20 ">
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
        <div className="flex justify-center items-center py-10 ">
          <Link href={"/pledgeForm"}>
            <h1 className=" font-bold  text-lg px-8 py-4 cursor-pointer hover:bg-indigo-600 transition-all bg-indigo-900 w-60 rounded-full text-center text-white ">
              Take Plegde
            </h1>
          </Link>
        </div>

        {/* <h1 className="font-bold text-center ">About Page</h1> */}
      </div>
      <Footer/>
    </>
  );
}
