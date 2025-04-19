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
  { name: "About Us", href: "/#about", id: 2 },
  { name: "Features", href: "#", id: 3 },
  { name: "Purchase", href: "#", id: 4 },
  { name: "Contact", href: "/#contact", id: 5 },
];

const Hero = () => {
  const pathname = usePathname();

  return (
    <div className="relative w-full h-[500px] p-4 bg-cover bg-center bg-[url('/images/bg-header.svg')]">
      {/* Header: Centered Logo and Nav */}
      <section className="flex flex-ol items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={300}
          height={300}
          className="ml-10"
        />

        <div className="bg-[#6F4436] flex items-center gap-6 z-10 rounded-sm">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className={`px-4 py-1 rounded-sm transition-all duration-300 flex items-center justify-center ${
                pathname === link.href
                  ? "bg-white text-[#6F4436] font-semibold h-full py-3" // Ensure it takes full height
                  : "text-white hover:bg-white hover:text-[#6F4436] py-3"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Text */}
      <section className="text-white flex flex-col items-center justify-center text-center mt-12 space-y-4">
        <p className={`${pompiere.className} text-5xl`}>Coffee Makes Mood</p>
        <p className={`${galada.className} font-bold text-3xl max-w-xl`}>
          "Indulge in Every Sip: Experience the Richness of Coffee!"
        </p>
      </section>
    </div>
  );
};

export default Hero;
