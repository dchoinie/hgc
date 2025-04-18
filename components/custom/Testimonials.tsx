"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

interface Testimonial {
  text: string | React.ReactNode;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Hi Derek, just wanted you to know how good I've been sleeping since using your gummies. I ate a half one every night and most of the nights I didn't even wake up. Honestly, I don't even remember stirring!  The taste is the best I've had yet. I'm gunna need more!",
    author: "Female | Early 60s",
    title: "Surgery Admittance",
  },
  {
    text: "After two nights this is definitely the best PM gummy I have ever experienced",
    author: "Male | Mid 30s",
    title: "Sales",
  },
  {
    text: "Your gummies worked better than anything I've tried to use to sleep before.",
    author: "Male | Mid 30s",
    title: "Sales Director",
  },
  {
    text: "My wife is a big fan of your night gummies by the way. She's almost finished that sampler pack you gave me. Nice work!",
    author: "Female | Early 40s",
    title: "Vice President",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="w-full py-24 bg-brand-gray">
      <Container>
        <SectionTitle title="Love from our customers" />
        <div className="mx-auto max-w-6xl mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="h-full bg-transparent border-none">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <blockquote className="flex-1">
                        <p className="text-lg italic">
                          &quot;{testimonial.text}&quot;
                        </p>
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
