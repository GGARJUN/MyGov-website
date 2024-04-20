import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutMyGov() {
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
          <Link href={"/aboutmygov"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              About MyGov
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">MyGov: An Overview</h1>
        <span className="border border-muted-foreground flex"></span>
        <div className="flex flex-col justify-center items-start gap-5 my-5">
          <p className="text-muted-foreground">
            The citizen-centric platform empowers people to connect with the
            Government & contribute towards good governance.
          </p>
          <p className="text-muted-foreground">
            MyGov has been established as Government of India’s Citizen
            Engagement Platform which collaborates with multiple Government
            bodies/ Ministries to engage with citizens for policy formulation
            and seeks the opinion of people on issues/ topics of public interest
            and welfare.
          </p>
          <p className="text-muted-foreground">
            Since its launch on 26th July 2014, MyGov has more than 30.0 million
            registered users. Almost all Government Departments leverage MyGov
            platform for their citizen engagement activities, consultations for
            policy formulation and also to disseminate information to citizens
            for various Government schemes and programs. MyGov is amongst the
            most active profiles on Social Media – Twitter, Facebook, Instagram,
            YouTube & LinkedIn with the username @MyGovIndia. MyGov has a
            significant presence on several Indian social media platforms like
            Koo, Sharechat, Chingari, Roposo, Bolo Indya and Mitron. MyGov has
            adopted multiple engagement methodologies like discussions, tasks,
            polls, surveys, blogs, talks, pledges, quizzes and on-ground
            activities by innovatively using internet, mobile apps, IVRS, SMS
            and outbound dialling (OBD) technologies.
          </p>
          <p className="text-muted-foreground">
            MyGov has also launched State instances in 23 States, namely
            Himachal Pradesh, Haryana, Maharashtra, Madhya Pradesh, Arunachal
            Pradesh, Assam, Manipur, Tripura, Chhattisgarh, Jharkhand, Nagaland,
            Uttarakhand, Goa, Tamil Nadu, Uttar Pradesh, Jammu & Kashmir,
            karnataka, Gujarat, Dadra and Nagar Haveli & Daman and Diu, Mizoram,
            Rajasthan, Ladakh and Andaman & Nicobar Islands.
          </p>
        </div>
        <div className="flex justify-between items-center my-10 gap-10">
          <Image src={"/about/1.png"} height={500} width={500} alt="about" />
          <div className="w-[50%]">
            <h2 className="font-bold">
              MyGov is part of Digital India Corporation, a Section 8 company
              under Ministry of Electronics and IT, Government of India.
            </h2>
            <p className="my-9 text-muted-foreground">
              MyGov has had significant success in terms of engaging with
              citizens. Logos and Tagline of key National Projects have been
              crowdsourced through MyGov. Few Notable crowdsourced initiatives
              are Logo for Swachh Bharat, Logo for National Education Policy,
              Logo for Digital India Campaign, etc. MyGov has time and again
              solicited inputs of draft policies from citizens few of those are
              National Education Policy, Data Centre Policy, Data Protection
              Policy, National Ports Policy, IIM Bill etc. MyGov have also been
              frequently soliciting ideas for Mann Ki Baat, Annual Budget,
              Pariksha Pe Charcha and many more such initiatives.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center my-10 gap-10">
          <div className="w-[50%]">
            <p className="my-9 text-muted-foreground">
              To disseminate authentic, easy to understand and consistent
              information relating to COVID19, MyGov has been supporting MoHFW
              for communications on social media. With an objective to drive
              behavioural change, fighting fake news and busting myths, MyGov
              created a dedicated portal for COVID related information
              dissemination – https://www.mygov.in/covid-19. MyGov has also
              built a Chatbot on WhatsApp to disseminate information about
              Covid19 and Vaccination through a Helpdesk number 9013151515.
            </p>
            <p className="my-9 text-muted-foreground">
              <span className="font-bold">In compliance with the</span>{" "}
              Information Technology (Intermediary Guidelines and Digital Media
              Ethics Code) Rules, 2021, MyGov has notified the following
              officers as Chief Compliance Officer, Nodal Officer and Grievance
              Officer:
            </p>
          </div>
          <Image src={"/about/2.png"} height={500} width={500} alt="about" />
        </div>
      </div>
      <Footer />
    </>
  );
}
