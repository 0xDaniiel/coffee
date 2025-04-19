"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // alert("Something went wrong. Try again.");
      }
    } catch (err) {
      // console.error(err);
      // alert("Error sending message.");
    }
  };

  return (
    <footer className="bg-[#291600] text-white" id="contact">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-10 py-10">
        {/* Contact Us Section */}
        <section className="w-[300px]">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-400 mb-4">Send us a message</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#DBBCA1] text-[#291600]  cursor-pointer w-fit px-5 py-2 font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Sitemap Section */}
        <section className="w-[300px]">
          <h2 className="text-3xl font-bold mb-2">Sitemap</h2>
          <p className="text-gray-400 mb-4">All our pages</p>

          <ul className="space-y-2 text-base text-gray-200">
            <li className="font-semibold">
              <Link href="/" className="hover:underline">
                - Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:underline">
                - About Us
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:underline">
                - Feature
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:underline">
                - Pricing
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:underline">
                - Contact Us
              </Link>
            </li>
          </ul>
        </section>

        {/* Logo and Info Section */}
        <section className="w-[300px]">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={300}
            height={300}
            className="mb-4"
          />

          <div className="flex gap-2 items-center -mt-14">
            <FaPhone /> <span className="text-sm">+000 000 000</span>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineMail />
            <a
              href="mailto:dannydotdev@gmail.com"
              className="text-white text-sm"
            >
              dannydotdev@gmail.com
            </a>
          </div>
        </section>
      </div>

      <section className="text-right px-4">
        <p>Developed by:</p>
        <Link href="https://x.com/0xDaniiel" className="font-bold p-1">
          Daniel
        </Link>
      </section>

      <section className="bg-[#DBBCA1] text-center py-5 text-[#291600]">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
