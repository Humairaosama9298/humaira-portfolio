"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

export default function Header() {
  const routes = useRouter();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project", label: "Project" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <div>
      <header className="text-white">
        <nav className="flex flex-row justify-between xl:justify-around items-center">
          <a href="/">
            <Image
              className="w-24 h-24"
              src="/images/logo/logo.png"
              alt="logo"
              width={96}
              height={96}
            />
          </a>
          
          <div className="text-[14px] xl:space-x-8 xl:text-lg hidden md:flex md:flex-row md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Button
            onClick={() => routes.push("/contact")}
            variant="outline"
            size="sm"
            className="hidden text-[10px] xl:text-sm md:flex rounded-3xl xl:px-8 py-5"
          >
            CONTACT ME
          </Button>
          
          <div className="px-4 md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="hover:text-accent" />
              </SheetTrigger>
              <SheetContent>
                
                  <SheetDescription>
                    <div className="flex flex-col font-semibold my-8 space-y-12 items-center">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="hover:rounded hover:text-accent hover:border-b-4 hover:border-b-accent py-2 transition duration-500 ease-in-out"
                        >
                          {link.label}
                        </Link>
                      ))}
                      <Button
                        onClick={() => routes.push("/contact")}
                        variant="outline"
                        className="rounded-3xl hover:shadow-white px-10 py-5"
                      >
                        CONTACT ME
                      </Button>
                    </div>
                  </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
}
