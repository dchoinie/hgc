import React from "react";
import Container from "./Container";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface FeaturedProduct {
  name: string;
  description: string;
  image: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    name: "Raspberry",
    description: "Anytime | Made with Real Fruit",
    image: "/raspberry.jpg",
  },
  {
    name: "Sleep",
    description: "Nighttime | Blackberry Lavender",
    image: "/sleep.jpeg",
  },
  {
    name: "Awake",
    description: "Coming Soon!",
    image: "/awake.jpg",
  },
];

const Featured = () => {
  return (
    <div className="bg-brand-gray py-24">
      <Container>
        <SectionTitle title="THC AND CBD Gummies" />
        <div className="flex justify-between w-full mt-12 gap-12">
          {featuredProducts.map((product: FeaturedProduct) => (
            <div key={product.name} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <h3 className="text-3xl text-brand-green font-bold underline mt-3 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
