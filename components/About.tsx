import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="bg-[#DBBCA1] flex items-center gap-10 p-7" id="about">
      <div className="flex-1">
        <Image
          src="/images/coffee-img.svg"
          alt="Discover"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      <section className="flex-1 text-[#220404] space-y-4">
        <h1 className="font-bold text-3xl">Discover Coffee Borcolle</h1>
        <p className="text-lg">Elevating Your Coffee Experience</p>
        <p>
          At Coffee Borcelle, we're on a mission to redefine your coffee
          moments. Our carefully curated selection of premium beans, sourced
          from the world's most renowned coffee regions.
        </p>
        <p>
          With expert craftsmanship and a commitment to quality, join us in
          savoring the art of coffee, one cup at a time.
        </p>
        <Button>Read More</Button>
      </section>
    </div>
  );
};

export default About;
