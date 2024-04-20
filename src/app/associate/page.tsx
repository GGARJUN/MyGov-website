import { ChevronRightCircleIcon } from "lucide-react";
import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Associate() {
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
              Associate with MyGov
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Associate with MyGov</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="my-10">
          <h1 className="font-medium  text-lg">
            MYGOV LOOKS FORWARD TO ASSOCIATE WITH GOVERNMENT INSTITUTIONS
          </h1>
          <p className="text-base mt-3 text-muted-foreground">
            On 26th July, 2014, the Hon’ble Prime Minister of India launched
            MyGov – a platform for Citizen Engagement for good governance, which
            presents a wonderful opportunity for citizens, experts and
            government authorities to collectively achieve the goal of Surajya.
          </p>
          <h3 className="text-base mt-3 text-muted-foreground">
            MyGov welcomes Government Institutions to collaborate with citizens
            through this platform.
          </h3>
          <h3 className="text-base mt-3 text-muted-foreground">
            MyGov is primarily created for the Government departments and
            institutions to pursue their citizen engagement initiatives.
            Institutions can form or create interest groups based on various
            causes and initiatives taken in each sector the government.
          </h3>
          <ul className="text-base mt-3 text-muted-foreground">
            <li className="list-disc">
              Within each group, discussions on relevant and significant topics
              can be initiated. The discussions can help government institutions
              understand viewpoints of citizens and gather feedback on policy
              issues.
            </li>
            <li className="list-disc">
              Citizens can be involved in online and on ground tasks through the
              platform such as writing research documents, concept notes, field
              reports, taking photographs/videos, compiling policy measures etc.
              Tasks would not only lead to crowd sourcing of ideas but would
              also help institutions understand region specific, sector specific
              as well as individual success stories, best practices and/or
              issues.
            </li>
            <li className="list-disc">
              Another facet of the platform is the Creative Corner and Open
              Forum which gives institutions and bodies the opportunity to
              organize contests for creative inputs on upcoming initiatives or
              open up discussions on specific theme/issue of national
              importance.
            </li>
          </ul>
          <h1 className="text-lg mt-3 text-muted-foreground font-bold">
            POTENTIAL OUTCOMES:
          </h1>
          <ul className="text-base mt-3 text-muted-foreground">
            <li className="list-disc">
              Understand viewpoints of citizens and gather feedback
            </li>
            <li className="list-disc">
              Get people's ideas and their contribution through the tasks
            </li>
            <li className="list-disc">
              Identify talent and expertise which can be garnered towards the
              success of projects with people's participation
            </li>
            <li className="list-disc">
              Implement best ideas and achieve the goal of 'Good Governance'
            </li>
          </ul>
          <p className="text-base mt-3 text-muted-foreground">
            Last but not the least, MyGov helps government bodies identify
            talent and expertise which can be garnered towards the success of
            projects to strengthen governance with people’s participation.
          </p>

          <h1 className="text-base font-bold mt-3 text-muted-foreground">
            Fill the Template and script a new chapter in the future of the
            country with this people-powered platform:
          </h1>
          <ul className="text-base mt-3 text-muted-foreground">
            <Link
              target="_blank"
              href={
                "https://static.mygov.in/static/s3fs-public/mygov_1701321436226699.pdf"
              }
            >
              <li className="list-disc hover:text-blue-600">
                Template (PDF-697 KB) - English
              </li>
            </Link>
            <Link
              target="_blank"
              href={
                "https://static.mygov.in/static/s3fs-public/mygov_16887248421.pdf"
              }
            >
              <li className="list-disc hover:text-blue-600">
                Template (PDF-735 KB) - Hindi
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}
