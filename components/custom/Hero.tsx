import React, { JSX } from "react";
import Image from "next/image";
import Container from "./Container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Hero = (): JSX.Element => {
  return (
    <div className="h-[calc(100vh-152px)] bg-gray-50">
      <Container className="h-full flex items-center">
        <div className="flex gap-12 items-center">
          <div className="flex w-1/2 flex-col">
            <h1 className="text-6xl font-semibold">
              Plant-Powered Wellness, Backed by Science.
            </h1>
            <h3 className="my-6">
              Clean, Smart, and Effective THC and CBD Gummies Designed for You.
            </h3>
            <Button
              variant="default"
              size="lg"
              asChild
              className="self-start border border-brand-green bg-brand-green rounded"
            >
              <Link href="/shop">
                Shop Now <ShoppingCart className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <Image
              src="/hero.jpg"
              alt="Hero"
              width={600}
              height={600}
              className="shadow-md rounded"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
