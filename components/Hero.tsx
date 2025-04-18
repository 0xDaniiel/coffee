"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Galada, Pompiere } from "next/font/google";

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
});

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: ["400"],
});

const links = [
  { name: "Home", href: "/", id: 1 },
  { name: "About", href: "/discover", id: 2 },
  { name: "Reviews", href: "/reviews", id: 3 },
  { name: "Contact", href: "/contact", id: 4 },
];

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] p-4 bg-cover bg-right"
      // style={{
      //   backgroundImage: "url('/images/bg-header.svg')",
      // }}
    >
      <section className="flex items-center">
        <Image src="/images/logo.svg" alt="logo" width={200} height={200} />

        <div className="bg-[#6F4436] px-3 py-1 flex items-center gap-5 z-10">
          {links.map((link) => (
            <Link href={link.href} key={link.id} className="text-white">
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <p className={`${pompiere.className} text-5xl`}>Coffee Makes Mood</p>
        <p className={`${galada.className} font-bold text-white text-5xl`}>
          "Indulge in Every Sip: Experience the Richness of Coffee!"
        </p>
      </section>
    </div>
  );
};

export default Hero;
