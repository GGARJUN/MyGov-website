import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";
import Footer from "@/components/Footer";

export default function Terms() {
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
          <Link href={"/terms"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Terms & Conditions
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Terms & Conditions</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className="my-10">
          <p className="text-muted-foreground mt-5">
            These terms of use describe your rights and responsibilities as a
            user of the mygov.in (MyGov). To have a MyGov account, you must
            accept these terms of use.
          </p>
          <p className="text-muted-foreground mt-5">
            MyGov, NIC, MeitY and Govt. of India reserve the right to make
            changes to MyGov and these terms of use at any time. If those
            changes affect your rights or responsibilities, you will be notified
            through MyGov. .
          </p>
          <p className="text-muted-foreground mt-5">
            The following terms of use supersede and replace any terms and
            conditions you may have previously accepted governing your use of
            MyGov. The following Terms & Conditions come into effect as soon as
            you have accepted it and created your MyGov account.
          </p>
          <p className="text-muted-foreground mt-5">
            As a user of MyGov you are granted a nonexclusive, nontransferable,
            revocable, limited license to access and use MyGov and content in
            accordance with these Terms of Use. Provider may terminate this
            license at any time for any reason.
          </p>
          <p className="text-muted-foreground mt-5">
            MyGov designed & hosted by National Informatics Centre, Contents
            provided by the various Organizations, Departments and Ministries of
            Government of India.
          </p>
          <p className="text-muted-foreground mt-5">
            Though all efforts have been made to ensure the accuracy and
            currency of the content on MyGov, the same should not be construed
            as a statement of law or used for any legal purposes. In case of any
            ambiguity or doubts, users are advised to verify/check with the
            concerned Ministry/Department/Organization and/or other source(s),
            and to obtain appropriate professional advice.
          </p>
          <p className="text-muted-foreground mt-5">
            Under no circumstances will the Government
            Ministry/Department/Organization be liable for any expense, loss or
            damage including, without limitation, indirect or consequential loss
            or damage, or any expense, loss or damage whatsoever arising from
            use, or loss of use, of data, arising out of or in connection with
            the use of MyGov.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
            LIMITATION ON USE:
          </h1>
          <p className="text-muted-foreground mt-5">
            The Content on MyGov is for your personal use only and not for
            commercial exploitation. You may not decompile, reverse engineer,
            disassemble, rent, lease, loan, sell, sublicense, or create
            derivative works from MyGov. Nor may you use any network monitoring
            or discovery software to determine the site architecture, or extract
            information about usage, individual identities or users. You will
            not use any robot, spider, other automatic software or device, or
            manual process to monitor or copy MyGov without Provider’s prior
            written permission. You will not copy, modify, reproduce, republish,
            distribute, display, or transmit for commercial, non-profit or
            public purposes all or any portion of MyGov, except to the extent
            permitted by the copyright policy of this terms of use. Any
            unauthorized use of MyGov is prohibited. The use of any software
            (e.g. bots, scraper tools) or other automatic devices to access,
            monitor or copy the website pages is prohibited unless expressly
            authorized by the MyGov in writing.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
            POLICY WITH REGARD TO YOUR CONTENT:
          </h1>
          <p className="text-muted-foreground mt-5">
            Uploading content or submitting any materials for use on MyGov, you
            grant (or warrant that the owner of such rights has expressly
            granted) MyGov a perpetual, worldwide, royalty-free, irrevocable,
            non-exclusive right and license, with right to sublicense, to use,
            reproduce, modify, adapt, publish, publicly perform, publicly
            display, digitally display and digitally perform translate, create
            derivative works from and distribute such materials or incorporate
            such materials into any form, medium, or technology now known or
            later developed throughout the universe. You agree that you shall
            have no recourse against Provider for any alleged or actual
            infringement or misappropriation of any proprietary right in your
            communications to us.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
            USER RESPONSIBILITY:
          </h1>
          <p className="text-muted-foreground mt-5">
            You must use MyGov and your MyGov account only for lawful purposes
            and in a manner that does not infringe the rights of or restrict or
            inhibit the use and enjoyment of MyGov by any third party. This
            includes conduct which is unlawful or which may harass or cause
            distress or inconvenience to any person, the transmission of obscene
            or offensive content or disruption to MyGov.
          </p>
          <p className="text-muted-foreground mt-5">
            You must not post or transmit via MyGov any unlawful, defamatory,
            obscene, offensive or scandalous material, or any material that
            constitutes or encourages conduct that would contravene any law.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
          INFORMATION THAT YOU PROVIDE ON MYGOV:
          </h1>
          <p className="text-muted-foreground mt-5">
          If, within your MyGov account, you are asked to provide information, the information you supply must be complete and accurate. You acknowledge that if you supply incomplete, inaccurate or false information, use MyGov to perform (or attempt to perform) an unauthorized action, or otherwise misuse MyGov, the it may suspend or terminate your MyGov access.
          </p>
          <p className="text-muted-foreground mt-5">
          Giving false or misleading information is a serious offence. Providing incomplete, inaccurate or false information via MyGov will be treated in the same way as providing incorrect information on a form or in person and may result in prosecution and civil or criminal penalties.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
          COPYRIGHT POLICY:
          </h1>
          <p className="text-muted-foreground mt-5">
          Material featured on this website may be reproduced free of charge. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party (user submitted content). Authorization to reproduce such material must be obtained from the copyright holder concerned.
          </p>

          <h1 className="text-green-500 font-bold text-lg mt-5">
          HYPERLINKING POLICY:
          </h1>

          <h1 className="text-green-500 font-bold text-base mt-5">
          Links to external websites/portals
          </h1>
          <p className="text-muted-foreground mt-5">
          At many places on MyGov, you shall find links to other websites/portals. These links have been placed for your convenience. MyGov is not responsible for the contents of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked destinations.
          </p>
          <h1 className="text-green-500 font-bold text-base mt-5">
          Links to MyGov by other websites/portals
          </h1>
          <p className="text-muted-foreground mt-5">
          We do not object to you linking directly to the information that is hosted on this web site and no prior permission is required for the same. However, we would like you to inform us about any links provided to this website so that you can be informed of any changes or updates therein. Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to MyGov must load into a newly opened browser window of the User.
          </p>
          <h1 className="text-green-500 font-bold text-lg mt-5">
          PRIVACY POLICY
          </h1>
          <p className="text-muted-foreground mt-5">
          This website does not automatically capture any specific personal information from you (like name, phone number or e-mail address), that allows us to identify you individually. If you choose to provide us with your personal information, like names or addresses, when you visit our website, we use it only to fulfill your request for information. To participate and engage with government through MyGov requires your registration. Information so collected is used to facilitate interaction.
          </p>
          <p className="text-muted-foreground mt-5">
          MyGov conducts many Quizzes, Hackathons, and Contests in collaboration with Ministries and Departments. The personal details of the winners can be shared with the Contest Creators/ Collaborating Departments. The names of the winners, without any Personally Identifiable Information, can be used by the MyGov Team and the Contest Creator/ Collaborating Departments for display in public by means of Electronic/ Print Media.
          </p>
          <p className="text-muted-foreground mt-5">
          MyGov do not sell or share any personally identifiable information volunteered on this site to any third party (public/private) except for the winners as explained in para above. Any information provided on MyGov will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
          </p>
          <p className="text-muted-foreground mt-5">
          MyGov gather certain information about the User, such as Internet protocol (IP) address, domain name, browser type, operating system, the date and time of the visit and the pages visited. MyGov make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage MyGov has been detected.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
