
import { ThemeToggle } from "@/app/components/Themetoggle";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";


export default async function Header() {
  const { userId } = auth();

  return (
    <div className="fixed top-0 w-full z-50 ">
      <div className="w-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500">
        <div className="flex justify-between items-center px-20">
          <div className="flex justify-start items-center gap-3 px-2">
            <Image src={"/india.png"} alt="Logo" width={50} height={50} />
            <h2 className="font-semibold">GOVERMENT OF INDIA</h2>
          </div>
          <div>
          </div>
        </div>
      </div>
      <nav className="border-b bg-background h-[10vh] flex items-center ">
        <div className="container  flex items-center justify-between ">
          <Link href="/">
            <Image src={"/logo.svg"} alt="Logo" height={100} width={100} />
          </Link>
          {/* <Link href='/about'>About</Link> */}
          <div className="flex items-center gap-x-5 ">


            <div className="flex items-center gap-x-5">
              {userId ? (
                <div className="flex items-center gap-x-5">
                  <Link href="/dashboard">
                    <Button>Dashboard</Button>
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex items-center gap-x-5">
                  <Link href="/sign-up">
                    <Button>Sign up</Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button variant="secondary">Sign in</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className='w-40 right-10 absolute top-4 '> 
          {userId ? (
            <div className='flex gap-4 items-center'>
              <Link href='/dashboard'>Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
            </div>
          )}
        </div> */}
      </nav>
      
    </div>
  );
}
