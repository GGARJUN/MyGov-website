import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";
import { ChevronRightCircleIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

export default function FAQ() {
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
          <Link href={"/faq"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              MyGov - FAQ
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">MyGov - FAQ</h1>
        <span className="border border-muted-foreground flex"></span>
        <div className="my-10 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border border-muted-foreground px-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                What is MyGov
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                MyGov is an innovative platform to build a partnership between
                Citizens and Government with the help of technology for growth
                and development of India. Through this platform, the Government
                aims to encourage Citizen Participation towards Good Governance
                by seeking their ideas, suggestions and grass roots level
                contribution. Citizens can participate in this unique initiative
                of nation building. For the very first time in the history of
                this country, citizens from across India will come together to
                share their expert thoughts, ideas and suggestions with the
                Government in areas related to various policies, programs,
                schemes etc. MyGov aims to empower citizens to work hand in hand
                with the Government.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                How can I join MyGov
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Register on https://www.mygov.in to participate. You will be
                asked for personal details such as name, email id etc. You will
                also be required to mention the kind of skills you have & the
                issues on which you may like to provide inputs.
              </AccordionContent>
              <AccordionContent className="text-base text-muted-foreground">
                Please note that MyGov do not share any personally identifiable
                information volunteered on this site with any third party
                (public/private). Any information provided to this website will
                be protected from loss, misuse, unauthorized access, disclosure,
                alteration, or destruction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                For Government Employee
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                If you are a Government Employee having @gov.in or @nic.in email
                Id, you can use the credentials for the same to log in without
                having to provide any other details. rn.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                For Public
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                For the larger public, registration and sign up on MyGov can be
                done through your valid email ID and your 10-digit Mobile
                number. While logging in, either the registered mobile number or
                email id can be used. Every time you enter your Mobile Number or
                Email ID, a One Time Password (OTP) shall be sent to your email
                as well as mobile number registered with MyGov. You do not need
                to remember any password for logging in. Alternatively, you can
                Sign-in by using your email id and password as you maintain with
                MyGov.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                What are the modes of participation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                The platform consists of various focus Groups where citizens can
                undertake tasks (both online and on ground) as well as share
                their insights through various tasks, discussions, polls, talks
                and blogs related to the particular Group.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Groups: Collaborate with Government!
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Explore & choose from an array of topics on public and national
                importance on which Government and its respective agency would
                like to hear from you. Make yourself part of these groups and
                express your valued views and proposal on these issues. The
                Government would seek your active engagement and participation
                in addressing issues mentioned as group topics in the portal. A
                citizen can only be part of 4 groups at one particular time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Discuss: Express Yourself
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Express your valued insight and views on theme based discussions
                on the MyGov. It values your views and the Government is keen to
                hear from you to improve on its policy initiatives. Therefore,
                involve yourself in the discussions and contribute actively to
                the process of policy formulation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Do: Devote your time for nation building!
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Become an active stakeholder in the governance process. Not only
                in the formulation part of it but also in the implementation
                bit. The Government through the MyGov Portal provides you with
                the opportunity to partner the government in its policy
                implementation drive through the group based and individual
                tasks which are earmarked on this task. Take up the tasks and
                help the Government in taking its policy goals and
                implementation forward through your individual action.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-9"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Blog: Stay updated and don’t miss out on important MyGov
                initiatives
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                MyGov blog is an important attribute of this portal which helps
                you stay up to date with the initiatives and activities of the
                government in the MyGov Portal. It provides you with a good idea
                of the burning issues in hand helps you chart and prioritize
                your engagement through this portal
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-10"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Talk: Stay Connected!
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                MyGov portal also gives you the opportunity to connect and
                engage with government representatives through live chats. This
                is a unique platform which helps you to exchange views and ideas
                on real time basis. At the same time it also provides the
                government institutions a direct link to the citizens to educate
                and take forward their initiatives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-11"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Poll: Tell us what you think!
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                MyGov Polls gives the citizen the right to cast his/her opinion
                on particular policy issues through online polls, giving the
                government a good idea about the effectiveness and reception of
                its policy initiatives. It also helps the Government in decision
                making by the gauging of public opinion. This is an effective
                tool enabling the citizens to directly contribute to the
                decision making process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-12"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Why should I participate?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                MyGov is a unique platform for citizen engagement through
                participatory governance. By registering in MyGov, you get the
                opportunity to share your views and ideas on issues of public
                importance through discussions and also directly take part in
                the governance initiatives through the tasks which are earmarked
                on this portal to address issues of public concern. Most
                importantly MyGov also enables you to take part in various
                initiatives towards public good and lets you to voice your
                opinion on the policy initiatives of the Government. MyGov makes
                you an agent of change and gives a golden opportunity to
                contribute in the journey towards nation building and towards
                attaining 'Surajya.'
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-13"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                What are the benefits of participating?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Get credit points by posting views on Discussions, completing
                Tasks that you volunteer for, and sharing ideas and viewpoints
                on social media. MyGov through its various features and
                initiatives provides you a readymade interface to connect with
                the government on a regular basis and contribute towards policy
                formation and governance. Incentives based on credit points will
                be announced in the future. Periodically, select
                volunteers/achievers can get to meet and present their views
                directly to the Ministers and/or even to the Hon'ble PM of
                India.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-14"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                How can I report a post which is inappropriate?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                In case you find a particular post or content inappropriate or
                unsuitable in nature you can report the particular comment by
                clicking on the spam button which is attached with each and
                every discussion or task post. Once reported, the particular
                post will be removed from the website if five MyGov users in all
                report the post for its inappropriate content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-15"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                How can I Send Feedbacks
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Any query, of generic nature, related to content, design,
                service or technological issues with respect to MyGov platform
                can be sent to through this customized Feedback interface.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-16"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Facing problems regarding registration or log in?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                In case you are facing any problem regarding the registration or
                login process, please do get in touch with us through this form.
                We would be more than happy to get back to you and help in
                solving issues you may face while browsing and/or participating
                through MyGov, as we value your participation in MyGov.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-17"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Did not find your suggestions on the platform?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Do not hesitate to get in touch with us with the same we will
                address your issue at the earliest as we value your
                participation in the MyGov Platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-18"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Task Feedback
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                If you are facing problems with regard to the task which you
                have accepted please get in touch with us through the feedback
                form. We would be happy to revert back to you. In case you have
                suggestions about tasks which can be included or want to provide
                us insight with regard to an existing task please get in touch
                with us through this feedback form.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-19"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Discussions Feedback
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                To provide us feedback regarding the discussion threads or
                report a problem which you are facing in the discussion mode
                please let us know through this feedback form.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-20"
              className="border border-muted-foreground px-5 mt-5 rounded-lg"
            >
              <AccordionTrigger className="font-medium text-xl text-muted-foreground">
                Any other issue
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Apart from the above mentioned category if you are facing any
                other issue with regard to the site, please do not hesitate to
                get in touch with us. Let us know about your problem with brief
                description of the issue which you are facing. We would be happy
                to revert back to you. If you wish to submit your feedback or
                query related to any specific content not related to MyGov and
                is pertaining to any Ministry/Department/Government body other
                than related to MyGov, kindly get in touch with the concerned
                Ministry/Department/Government body directly or visit their
                respective websites. MyGov will not respond to such
                queries/issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <h1 className="mt-5">
            Click here to view :
            <Link
              href={
                "https://static.mygov.in/static/s3fs-public/mygov_1701321579226699.pdf"
              }

            >
             <span className="text-blue-500 hover:text-blue-700"> User Manual - PDF (3.5 MB)</span>
            </Link>
          </h1>
        </div>
      </div>
      <Footer/>
    </>
  );
}
