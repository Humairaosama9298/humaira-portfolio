"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select, 
    SelectContent, 
    SelectGroup,
    SelectItem, 
    SelectLabel,
    SelectTrigger, 
    SelectValue  
} from "@/components/ui/select";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title:"Phone",
        description:"(+92) 319 405 1374"

    },
    {
        icon: <FaEnvelope />,
        title:"Email",
        description:"(+92) 319 405 1374"

    },
    {
        icon: <FaMapMarkerAlt />,
        title:"Adress",
        description:"Karachi, Pakistan."

    },
]



export default function Contact() {
  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6 "
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px] ">
                {/* Form */}
                <div className="">
                    <form action="">Form</form>
                </div>
                {/* Info */}
                <div className="">Info</div>
            </div>
        </div>
    </motion.section>
  )
}
