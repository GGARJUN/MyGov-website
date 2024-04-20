import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-slate-800 text-white h-[770px]">
        <div className=" text-white flex justify-evenly items-start pt-10 gap-10">
          <div>
            <h1 className="font-bold text-xl">Activites</h1>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Groups</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Do</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Discuss</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Poll & Survey</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Talk</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Campaigns</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Podcast</p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-xl">Activites</h1>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Groups</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Do</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Discuss</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Poll & Survey</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Talk</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Campaigns</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Podcast</p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-xl">Activites</h1>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Groups</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Do</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Discuss</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Poll & Survey</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Talk</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Campaigns</p>
            </Link>
            <Link href={""}>
              <p className="font-medium hover:border-b-2">Podcast</p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-5 ">Useful Links</h1>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/1.png"} width={50} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/2.png"} width={50} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/3.png"} width={30} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/4.png"} width={30} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/5.png"} width={30} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/6.png"} width={30} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
              <div className="flex justify-center items-center gap-3 bg-white p-2 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={"/footer/7.png"} width={30} height={50} alt="log" />
                <p className="text-black ">MyGov Quiz</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center gap-5 mx-10 my-10">
          <h1 className="font-bold  text-lg">Follow us</h1>
          <Image src={"/icons/twitter.png"} width={30} height={20} alt="log" />
          <Image src={"/icons/facebook.png"} width={30} height={20} alt="log" />
          <Image src={"/icons/youtube.png"} width={30} height={20} alt="log" />
          <Image
            src={"/icons/instagram.png"}
            width={30}
            height={20}
            alt="log"
          />
          <Image src={"/icons/whatsapp.png"} width={30} height={20} alt="log" />
          <Image src={"/icons/linkedin.png"} width={30} height={20} alt="log" />
        </div>

        <span className="border border-muted-foreground flex mt-5"></span>

        <div className="mx-10 my-10 flex justify-evenly items-center gap-5 ">
          <Image src={"/footer/8.png"} width={150} height={20} alt="log" />
          <p className="text-xs w-40">
            © Content owned, updated and maintained by the MyGov Cell. This
            website belongs to MyGov, Ministry of Electronics & Information
            Technology, Government of India. Platform is designed, developed and
            hosted by National Informatics Centre.
          </p>
          <Image src={"/footer/9.png"} width={150} height={20} alt="log" />
          <p className="text-xs w-10">Certified Quality Website</p>
          <Image src={"/footer/10.png"} width={150} height={20} alt="log" />
          <Image src={"/footer/11.png"} width={150} height={20} alt="log" />
          <Image src={"/footer/13.png"} width={150} height={20} alt="log" />
          <Image src={"/footer/12.jpg"} width={150} height={20} alt="log" />
        </div>
        <div className="w-full h-12 bg-gradient-to-r  from-cyan-400 to-blue-500  flex justify-center items-center ">
          <h1 className="text-center text-black text-sm ">
          Copyright © MyGov 2014 mygov-28.mygov.in - Last Updated: 14/04/24
          </h1>
        </div>
      </div>
    </>
  );
}
