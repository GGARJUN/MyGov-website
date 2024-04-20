import React from 'react'
import { DashboardNav } from '../dashboard/DashboardNav'
import Link from 'next/link'
import { ChevronRightCircleIcon } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function WebInformation() {
  return (
    <>
    <DashboardNav/>
    <div className="pt-20 mx-10">
        <div className="flex gap-5">
          <Link href={"/dashboard"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
              Home
            </h1>
          </Link>
          <ChevronRightCircleIcon className="text-muted-foreground hover:text-blue-800 cursor-pointer" />
          <Link href={"/webinformation"}>
            <h1 className="text-muted-foreground hover:text-blue-800 cursor-pointer">
            MyGov - Web Information Manager
            </h1>
          </Link>
        </div>

        <h1 className="font-medium text-lg my-5">MyGov - Web Information Manager</h1>
        <span className="border border-muted-foreground flex"></span>

        <div className='flex justify-center items-center my-10'>
        <Image src={'/website1.jpeg'} alt='al' width={1000} height={1000} />
        </div>

        <div className='flex justify-center items-center my-10'>
        <Image src={'/website.jpeg'} alt='al' width={1000} height={1000} />
        </div>

        </div>
        <Footer/>
    </>
  )
}
