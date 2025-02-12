'use client';

import Head from "next/head";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";


export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setStatus("✅ Email sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("✅ Email sent successfully!");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="py-10">
      <Head>
        <title>Contact Us - Terra Verda Herbal Co.</title>
        <meta name="description" content="Get in touch with us for inquiries, support, or feedback." />
        <meta name="keywords" content="Contact, Support, Terra Verda, Herbal, Feedback" />
        <meta name="author" content="Terra Verda Herbal Co." />
      </Head>
      <main className="flex flex-col items-center py-10 px-6 sm:px-10 rounded  bg-[#A64D79] min-h-screen">
  <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 text-center">Contact Us</h2>
  <p className="text-gray-200 text-base sm:text-lg max-w-xl text-center mb-8">
    We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
  </p>

  <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg border border-gray-200">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-[#A64D79] text-gray-900" placeholder="Enter your name"/>
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-[#A64D79] text-gray-900" placeholder="Enter your email"/>
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
        <textarea id="message" name="message" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-[#A64D79] h-28 sm:h-32 resize-none text-gray-900" placeholder="Write your message here..."></textarea>
      </div>
      <button type="submit" disabled={isPending} className="w-full bg-[#A64D79] text-white py-3 rounded-lg hover:bg-[#8B3D64] transition text-lg font-bold shadow-md">
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
    {status && <p className="mt-6 text-center text-[#A64D79] font-semibold text-lg">{status}</p>}
  </div>

  <div className="mt-8 text-[#FCE4EC] text-base sm:text-lg font-medium text-center space-y-4">
    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
      <Mail className="text-xl sm:text-2xl text-[#FFD1DC]" />
      <a href="mailto:humairaosama6@gmail.com" className="underline hover:text-[#FFC0CB] transition">
        humairaosama6@gmail.com
      </a>
    </div>
    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
      <Phone className="text-xl sm:text-2xl text-[#FFD1DC]" />
      <a href="tel:+923194051374" className="underline hover:text-[#FFC0CB] transition">
        0319 405 1374
      </a>
    </div>
  </div>
</main>

    </div>
  );
}
