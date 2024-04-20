import { ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Footer from "@/components/Footer";

export default function WebsitePolicies() {
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
              Website Policies
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">Website Policies</h1>
        <span className="border border-muted-foreground flex"></span>
        <div className="my-8">
          <h1 className="font-normal text-lg text-blue-700">
            COPYRIGHT POLICY:
          </h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            Material featured on this website may be reproduced free of charge.
            However, the material has to be reproduced accurately and not to be
            used in a derogatory manner or in a misleading context. Wherever the
            material is being published or issued to others, the source must be
            prominently acknowledged. However, the permission to reproduce this
            material shall not extend to any material which is identified as
            being copyright of a third party (user submitted content).
            Authorization to reproduce such material must be obtained from the
            copyright holder concerned.
          </p>
          <h1 className="font-normal text-lg text-blue-700">
            HYPERLINKING POLICY:
          </h1>
          <h2 className="font-semibold text-muted-foreground">
            Links to external websites/portals
          </h2>
          <p className="mt-5 mb-8 text-muted-foreground">
            Material featured on this website may be reproduced free of charge.
            However, the material has to be reproduced accurately and not to be
            used in a derogatory manner or in a misleading context. Wherever the
            material is being published or issued to others, the source must be
            prominently acknowledged. However, the permission to reproduce this
            material shall not extend to any material which is identified as
            being copyright of a third party (user submitted content).
            Authorization to reproduce such material must be obtained from the
            copyright holder concerned.
          </p>
          <h2 className="font-semibold text-muted-foreground">
            Links to external websites/portals
          </h2>
          <p className="mt-5 mb-8 text-muted-foreground">
            We do not object to you linking directly to the information that is
            hosted on this web site and no prior permission is required for the
            same. However, we would like you to inform us about any links
            provided to this website so that you can be informed of any changes
            or updates therein. Also, we do not permit our pages to be loaded
            into frames on your site. The pages belonging to MyGov must load
            into a newly opened browser window of the User.
          </p>
          <h1 className="font-normal text-lg text-blue-700">PRIVACY POLICY</h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            This website does not automatically capture any specific personal
            information from you (like name, phone number or e-mail address),
            that allows us to identify you individually. If you choose to
            provide us with your personal information, like names or addresses,
            when you visit our website, we use it only to fulfill your request
            for information. To participate and engage with the Government
            through MyGov requires your registration. Information so collected
            is used to facilitate interaction.
          </p>{" "}
          <p className="mt-5 mb-8 text-muted-foreground">
            MyGov conducts many Quizzes, Hackathons, and Contests in
            collaboration with Ministries and Departments. The personal details
            of the winners can be shared with the Contest Creators/
            Collaborating Departments. The names of the winners, without any
            Personally Identifiable Information, can be used by the MyGov Team
            and the Contest Creator/ Collaborating Departments for display in
            public by means of Electronic/ Print Media.
          </p>{" "}
          <p className="mt-5 mb-8 text-muted-foreground">
            MyGov does not sell or share any personally identifiable information
            volunteered on this site to any third party (public/private) except
            for the winners as explained in para above. Any information provided
            on MyGov will be protected from loss, misuse, unauthorized access or
            disclosure, alteration, or destruction.
          </p>{" "}
          <p className="mt-5 mb-8 text-muted-foreground">
            MyGov gathers certain information about the User, such as Internet
            protocol (IP) address, domain name, browser type, operating system,
            the date and time of the visit and the pages visited. MyGov make no
            attempt to link these addresses with the identity of individuals
            visiting our site unless an attempt to damage MyGov has been
            detected.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            We allow you to deactivate your account any time you wish. We will
            hide all your Personal Information from the system so that it is not
            visible and/or accessible from any regular operation. However, the
            Personal Information shall be retained in system/DB for the purpose
            of legal requirements/compliances for a minimum period of five years
            from the date of deactivation request.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            For data deletion, you may raise your request to MyGov Grievance
            Officer on grievance[at]mygov[dot]in
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            If you simply remove the MyGov application from your mobile device
            but do not deactivate your profile yourself from MyGov, you shall
            continue to be a registered user of MyGov and we shall continue to
            send you all promotions/newsletters/notifications that you have
            opted unless and until you opt-out of such communications.
          </p>
          <h1 className="font-normal text-lg text-blue-700">COOKIES POLICY</h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            A cookie is a piece of software code that an internet web site sends
            to your browser when you access information at that site. A cookie
            is stored as a simple text file on your computer or mobile device by
            a website’s server and only that server will be able to retrieve or
            read the contents of that cookie. Cookies let you navigate between
            pages efficiently as they store your preferences, and generally
            improve your experience of a website. MyGov use following types of
            cookies to enhance your experience and interactivity with MyGov its
            sub-domains:
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            1. Analytics cookies for anonymously remembering your computer or
            mobile device when you visit our website to keep track of browsing
            patterns.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            2. Service cookies for helping us to make our website work
            efficiently, remembering your registration and login details,
            settings preferences, and keeping track of the pages you view.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            3. Non-persistent cookies a.k.a per-session cookies. Per-session
            cookies serve technical purposes, like providing seamless navigation
            through MyGov and its sub-domains. These cookies do not collect
            personal information on users and they are deleted as soon as you
            leave our website. The cookies do not permanently record data and
            they are not stored on your computer’s hard drive. The cookies are
            stored in memory and are only available during an active browser
            session. Again, once you close your browser, the cookie disappears.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            You may note additionally that when you visit MyGov and its
            sub-domains where you are prompted to log in, or which are
            customizable, you may be required to accept cookies. If you choose
            to have your browser refuse cookies, it is possible that sub-domains
            of MyGov may not function properly.
          </p>
          <h1 className="font-normal text-lg text-blue-700">
            Content Review Policy (CRP)
          </h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            MyGov Website is the face of the Department of Information
            Technology, Ministry of Communications and Information Technology,
            Govt. of India. It is therefore required to keep the content on the
            Website current and up-to-date and hence there is a need for the
            Content Review Policy. Since the scope of the content is huge,
            different Review Policies are defined for the diverse content
            elements.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            The Review Policy is based on different type of content elements,
            its validity and relevance as well as the archival policy. The
            matrix below gives the Content Review Policy:
          </p>
          <h1 className="font-normal text-lg text-blue-700">Security Policy</h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            1. MYGOV has been placed in protected zones with implementation of
            firewalls and IDS (Intrusion Detection System) and high availability
            solutions.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            2. Before the launch of the MYGOV, simulated penetration tests were
            conducted. Penetration testing has also been conducted thrice after
            the launch of the MYGOV.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            3. MYGOV has been audited for known application level
            vulnerabilities before the launch and all the known vulnerabilities
            have been addressed.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            4. MYGOV has been re-audited for the application level vulnerability
            after major modification in application development.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            5. Hardening of servers has been done as per the guidelines of the
            cyber security division before the launch of the MYGOV.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            6. Access to MYGOV web servers is restricted both physically and
            through the network as far as possible.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            7. Logs at three different locations are maintained for authorized
            physical access of MYGOV servers.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            8. MYGOV web-servers are configured behind IDS, IPS (Intrusion
            Prevention System) and with system firewalls on them.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            9. All the development work is done on a separate development
            environment and is well tested on the staging and preprod server
            before updating it on the production server.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            10. After testing properly on the staging server the applications
            are uploaded to the production server using SSH and VPN through a
            single point.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            11. The content contributed by/from remote locations is duly
            authenticated and is not published on the production server
            directly. Any content contributed has to go through the moderation
            process before the final publishing to the production server.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            12. All contents of the web pages are checked for intentional or
            unintentional malicious content before final upload to web server
            pages.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            13. Audit and Log of all activities involving the operating system,
            access to the system, and access to applications are maintained and
            archived. All rejected accesses and services are logged and listed
            in exception reports for further scrutiny.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            14. Help Desk staff at the NIC Data Centre monitor the portal round
            the clock to check the web pages to confirm that the web pages are
            up and running, that no unauthorized changes have been made, and
            that no unauthorized links have been established.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            15. All newly released system software patches; bug fixes and
            upgrades are expediently and regularly reviewed and installed on the
            web server.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            16. On Production web servers, Internet browsing, email and any
            other desktop applications are disabled. Only server administration
            related tasks are performed.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            17. Server passwords are changed at the interval of three months and
            are shared by one person Mr Rishant Kumar.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            18.Mr Rishant Kumar has been designated as Administrator MYGOV and
            shall be responsible for implementing this policy for each of the
            web servers. The administrator shall also coordinate with the Audit
            Team for required auditing of the server(s).
          </p>
          <h1 className="font-normal text-lg text-blue-700">Compliance</h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            The MYGOV has been audited before launch and has complied with all
            the points mentioned in the policies document of the cyber security
            group mentioned above.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            MYGOV has also been subjected to an automated risk assessment
            performed through vulnerability identification software before and
            after the launch of the portal and all the known vulnerabilities
            have been addressed.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Cyber security groups address security needs using IDS/IPS, Firewall
            etc.
          </p>
          <h1 className="font-normal text-lg text-blue-700">
            Data Accuracy Policy
          </h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            MyGov takes all steps possible to ensure that the data on the
            platform is accurate. If something is found to be inaccurate MyGov
            will make every effort to correct said information as quickly as
            possible. If it is found to be an inaccuracy with the entire system
            MyGov will work swiftly to correct the problem so that your web
            experience is as trouble-free as possible. The information contained
            on MyGov is subject to change without prior notice.
          </p>
          <h1 className="font-normal text-lg text-blue-700">
            Contingency Management Plan
          </h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            The MyGov putting all efforts to be functional and running at all
            times to provide information and services to the users. All possible
            efforts are being made to minimize the downtime as and when it’s
            mandatorily required for scheduled/planned maintenance activities.
            In eventualities like defacement/hacking of the site, data
            corruption, hardware/software crash and natural disasters, all
            efforts will be made to restore the site in the shortest possible
            time
          </p>
          <h1 className="font-normal text-lg text-blue-700">
            Website Monitoring Policy
          </h1>
          <p className="mt-5 mb-8 text-muted-foreground">
            As Web being dynamic medium, changes in terms of updating data &
            technologies, access device and the requirements happen fairy
            frequently. So for this we have a website monitoring policy in place
            where website monitored periodically in accordance with the plan to
            and fix the quality and compatibility issues.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Under the Website Monitoring Policy, it is advised to monitor
            periodically to address and fix the quality and compatibility issues
            around the following parameters:
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Portal is monitored regularly through online testing tools such as
            GTmetrix, W3C Link Checker.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Functionality: All modules of the website are tested for their
            Functionality for their smooth working once in a month.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Performance: MyGov website is tested for the download time in every
            30 days.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Broken Links: The website is thoroughly reviewed to rule out the
            presence of any broken links or errors. It is fixed on immediate
            basis through CMS, in case of department related content we inform
            them with a time bound manner of one month, in case of no response
            it is removed manually.
          </p>
          <p className="mt-5 mb-8 text-muted-foreground">
            Traffic Analysis: We regularly monitor traffic on the website
            through CDN & Server in every 30 days. The DR site has been set up
            at National Data Centre, Pune. The main Data Centre is connected on
            high-speed optical fiber based leased line with its DR site.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
