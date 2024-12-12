"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "../../components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";




export default function Header() {
  const routes = useRouter();
  return (
    <div>
    <header className="top-0 p-6  md:-ml-8 text-white">
      <nav className="flex flex-row justify-between xl:justify-around items-center">
        <a href="#">
          <Image
            className="w-20 h-20 xl:w-28 xl:h-28 "
            src="/images/logo/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </a>
        <div className="text-[14px] xl:space-x-8 xl:text-lg hidden md:flex md:flex-row md:gap-8">
        <Link href="/" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Home</Link>
                  <Link href="/about" className="hover:rounded  hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">About</Link>
                  <Link href="/contact" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Contact</Link>
                  <Link href="/services" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Services</Link>
                  <Link href="/resume" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Resume</Link>

        </div>
        <Button onClick={() => routes.push("/contact") } 
        variant="outline" size="sm" className="hidden text-[10px] xl:text-sm md:flex rounded-3xl xl:px-8 py-5  ">
          CONTACT ME
        </Button>
        <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu className="hover:text-accent"/>
          </SheetTrigger>
          <SheetContent >
            <SheetHeader className="flex justify-center">
              <SheetTitle>
                <a href="#">
                  <Image
                    className="w-10 h-10"
                    src="/images/logo/logo_w.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </a>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col font-semibold my-8 space-y-12 items-center">
                  <Link href="/" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Home</Link>
                  <Link href="/about" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">About</Link>
                  <Link href="/contact" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Contact</Link>
                  <Link href="/services" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Services</Link>
                  <Link href="/resume" className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out">Resume</Link>
                <Button onClick={()=>routes.push("/contact")}
                  variant="outline" className="rounded-3xl hover:shadow-white px-10 py-5">
                  CONTACT ME
                </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
    </div>
  );
}
