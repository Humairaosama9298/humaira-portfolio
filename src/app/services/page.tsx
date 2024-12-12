'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import {  ArrowRight } from 'lucide-react';

const services = [
  {
    num:'01',
    title:'Web Development',
    Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil',
    href:''
},
{
  num:'02',
  title:'UI/UX Design',
  Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil',
  href:''
},
{
  num:'03',
  title:'Logo Design ',
  Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil',
  href:''
},
{
  num:'04',
  title:'SEO',
  Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil',
  href:''
},
]



export default function Services() {
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
          content="Humaira Osama, services, frontend developer, web designer"
        />
      </Head>
      <main>
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
          <div className="container max-auto">
            <motion.div
              initial={{ opacity:0}}
              animate={{
                opacity:1,
                transition:{delay: 2.4, duration: 0.4, ease: "easeIn"},
              }}
              className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                {services.map((service, index) => {
                  return (
                    <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>

                      {/* Top */}
                      <div className='w-full flex justify-between items-center'>
                        <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                        <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45'>
                          < ArrowRight className='text-primary text-3xl'/>
                        </Link>
                      </div>

                      {/* Title */}
                      <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>

                      {/* Description*/}
                      <p>{service.Description}</p>

                      {/* Border */}
                      <div className="border-b border-white/20 w-full"></div>
                    </div>
                  );
                })}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
