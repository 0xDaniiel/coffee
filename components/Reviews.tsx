import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    text: `"Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation."`,
    user: "@elonmusk",
  },
  {
    text: `"Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest."`,
    user: "@JeffBezos",
  },
  {
    text: `“Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.”`,
    user: "@MrBeast",
  },
];

const Reviews = () => {
  return (
    <div className="bg-[#655546] text-center text-white p-10" id="reviews">
      <section className="flex items-center justify-center gap-2">
        <h1 className="font-bold text-5xl text-center">Reviews</h1>
        <Image
          src="images/reviews-cup.svg"
          alt="coffee-beans"
          className="h-20"
          width={100}
          height={100}
        />
      </section>
      <p className="text-lg">what other people are saying!</p>

      <div className="flex justify-center gap-4 pb-2">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-[#DBBCA1] border-none px-5 py-1  w-[350px]"
          >
            {/* Optional CardHeader */}
            <CardContent>
              <p className="text-base">{testimonial.text}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-semibold text-center">
                {testimonial.user}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
