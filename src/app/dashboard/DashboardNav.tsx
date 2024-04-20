"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function DashboardNav() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <>
      <div className="w-full h-12 bg-gradient-to-r  from-cyan-400 to-blue-500 ">
        <div className="flex justify-between fixed items-center px-20">
          <div className="flex justify-start items-center gap-3 px-2">
            <Image src={"/india.png"} alt="Logo" width={50} height={50} />
            <h2 className="font-semibold">GOVERMENT OF INDIA</h2>
          </div>
          <div></div>
        </div>
      </div>
      <nav className=" z-50 fixed top-0 mt-2 left-[20%]  flex items-center h-36  w-[50%] justify-evenly">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/groups" title="Groups">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="champaigns"
                      title="Champaigns"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </li>
                  <ListItem href="/do" title="Do">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/talk" title="Talk">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/podcast"
                    title="Podcast"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuTrigger>MyGov States</NavigationMenuTrigger>
              <NavigationMenuContent>
                <h2 className="p-2 font-bold mt-1">STATES/UTs</h2>
                <ul className="grid  p-5 md:w-[400px] lg:w-[500px] grid-cols-4">
                  <ListItem
                    href="https://assam.mygov.in/"
                    title="Assam"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Bihar"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Goa"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Gujarat"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Haryana"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Jharkhand"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Karnataka"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Kerala"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Manipur"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Mizoram"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Nagaland"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Odisha"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Punjab"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Rajasthan"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Sikkim"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="https://tamilnadu.mygov.in/"
                    title="TamilNadu"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Telangana"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Tripura"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Chandigarh"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Puducherry"
                    target="_blank"
                    className="hover:bg-blue-500 hover:text-white"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>



            <NavigationMenuItem>
              <NavigationMenuTrigger>Microsites</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="https://transformingindia.mygov.in/" target="_blank" title="Transforming India">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="https://campus.mygov.in/" target="_blank" title="Campus">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="https://innovateindia.mygov.in/"
                      target="_blank"
                      title="Innovate India"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </li>
                  <ListItem href="https://self4society.mygov.in/" target="_blank" title="Self4Society">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <Link href={"/pledge"}>
                    <ListItem  title="Pledge">
                      How to install dependencies and structure your app.
                    </ListItem>
                  </Link>
                  <ListItem
                  target="_blank"
                    href="https://saathi.mygov.in/"
                    title="saathi"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Get to Know</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/aboutmygov" title="About MyGov">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="associate" title="Associate with MyGov">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/points"
                      title="Points & Badges"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </li>
                  <ListItem href="/mygovmedia" title="MyGov Media">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/policies" title="Website policies">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Help/Feedback</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/help" title="Help">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/webinformation" title="Web information Manager">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/terms"
                      title="Terms & Conditions"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </li>
                  <ListItem href="/map" title="Site Map">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/faq" title="FAQ">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/feedback"
                    title="Feedback"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/ourTeam"}>
                <NavigationMenuTrigger>Our Team</NavigationMenuTrigger>
              </Link>

              {/* <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
