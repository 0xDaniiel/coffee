import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#291600] text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-10">
        {/* Contact Us Section */}
        <section className="w-[300px]">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-400 mb-4">Send us a message</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-white text-gray-800 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#DBBCA1]"
            ></textarea>
            <Button className="bg-[#DBBCA1] text-[#291600] w-fit px-5 py-2 font-medium hover:opacity-90 transition">
              Submit
            </Button>
          </form>
        </section>

        {/* Sitemap Section */}
        <section className="w-[300px]">
          <h2 className="text-3xl font-bold mb-2">Sitemap</h2>
          <p className="text-gray-400 mb-4">All our pages</p>

          <ul className="space-y-2 text-base text-gray-200">
            <li className="font-semibold">Home</li>
            <li>- About Us</li>
            <li>- Feature</li>
            <li>- Pricing</li>
            <li>- Contact Us</li>
          </ul>
        </section>

        {/* Optional Third Section (e.g. Socials / Logo / Info) */}
        <section className="w-[300px]">
          <Image src="/images/logo.svg" alt="logo" width={300} height={300} />

          <div className="flex gap-2 items-center ">
            <FaPhone /> <span className=" text-sm">+000 000 000</span>
          </div>
          <div className="flex gap-2 items-center ">
            <MdOutlineMail />{" "}
            <a href="mailto:" className="text-white text-sm">
              dannydotdev@gmail.com
            </a>
          </div>
        </section>
      </div>

      <section>
        
      </section>
    </footer>
  );
};

export default Footer;
