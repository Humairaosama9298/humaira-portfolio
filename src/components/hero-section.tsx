'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Humairaosama9298", icon: Github },
  { href: "https://facebook.com/", icon: FaFacebook },
  { href: "https://www.linkedin.com/in/humaaaira666-osama666/", icon: Linkedin },
  { href: "https://instagram.com/", icon: FaInstagram },
];

export default function HeroSection() {
  return (
    <section>
      <div className="mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:py-20 xl:justify-around">
          <div className="text-center p-2 order-2 xl:order-none xl:text-left">
            <span>Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Humaira Osama</span>
            </h1>
            <p className="p-6 xl:p-0 max-w-[500px] mb-9 text-white/80">
              I transform ideas into digital reality through expert web
              development. Web developer passionate about technology, delivering
              exceptional digital experiences.
            </p>
            <div className="flex flex-col items-center xl:flex-row gap-10 xl:gap-0">
              <div className="xl:mr-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-accent border border-accent bg-transparent hover:bg-accent hover:text-primary rounded-3xl uppercase items-center"
                >
                  <span>Download CV</span>
                  <Download className="text-xl" />
                </Button>
              </div>
              <div className="mb-8 xl:mb-0 flex">
                <ul className="flex gap-5">
                  {socialLinks.map(({ href, icon: Icon }, index) => (
                    <li key={index}>
                      <a href={href} target="_blank">
                        <Icon className="text-base text-accent flex hover:text-primary hover:bg-accent duration-500 p-3 shadow-inner rounded-full border-2 h-10 w-10 border-accent" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8">
            <Image
              className="w-[200px] xl:w-[300px] py-10 xl:mr-28"
              src="/images/logo/profile-w.png"
              priority
              quality={100}
              width={200}
              height={200}
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
