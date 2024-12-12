import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Humaira Osama - Frontend Developer</title>
        <meta
          name="description"
          content="Get in touch with me for collaborations, inquiries, or feedback."
        />
        <meta
          name="keywords"
          content="Humaira Osama, contact, frontend developer, web designer"
        />
      </Head>
      <main>
        <section className="flex flex-col  items-center ">
          
          <div className="flex flex-col items-center py-10 ">
            <h2 className="text-3xl xl:text-5xl font-bold">Contact Us </h2>
           
  
            <div>
            <p className="text-center text-base text-white/80 xl:px-48 px-10 py-5 ">Our goal is to provide you with exceptional service and support. If you need assistance with a product or service, or if you have feedback to share, we're all ears. Your input helps us improve and serve you better.
            </p>
            </div>
          </div>
          <div className=" xl:w-full px-10 space-y-20 flex flex-col xl:flex-row justify-around xl:mt-0 ">
          <div
            className="p-8 border-l-2 xl:h-full xl:space-y-20 xl:translate-y-14 space-y-12 border-zinc-200
          "
          >
            <div>
              <h2 className="text-base text-accent">Address:</h2>
              <p className="mt-3 text-sm">
                123/12 Centrel Town Karachi Sindh, Pakistan
              </p>
            </div>
            <div>
              <h2 className="text-base text-accent">Contact:</h2>
              <ul className="space-y-2">
                <li className="list-none mt-3 ">
                  <a
                    href="mailto:humairaosama6@gmail.com"
                    className="flex items-center text-sm  "
                  >
                    <Mail className="text-accent h-4 w-4 mr-2" />
                    humairaosama6@gmail.com
                  </a>
                </li>
                <li className="list-none pb-2 ">
                  <a
                    href="tel:+923194051374"
                    className="flex items-center  text-sm  "
                  >
                    <Phone className="text-accent h-4 w-4 mr-2 " />
                    92 319 4051374
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-accent/80 rounded text-center p-5 xl:p-10 md:p-5">
              <form action="" className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="text-sm font-bold ">Name:</label>
                  <input type="text" id="name" name="name" className="px-3 rounded w-full" placeholder="Enter Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-bold">Email:</label>
                  <input type="email" id="email" name="email" className="px-3 rounded w-full" placeholder="Enter Your Name"/>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-bold">Message:</label>
                  <textarea id="message" name="message" className="px-3 rounded  w-full" placeholder="Enter Your Name"/>
                </div>
                <button type="submit" className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

    </div>
    
  );
}
