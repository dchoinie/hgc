import React from "react";
import Container from "./Container";
import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <Container className="py-24">
      <div className="flex flex-col items-center text-center">
        <QuoteIcon className="w-24 h-24 text-gray-400 mb-2" />
        <h3 className="text-5xl font-medium text-brand-green mb-6">
          &ldquo;You can always take more,
          <br /> you can&apos;t take less.&rdquo;
        </h3>
        <p className="text-gray-500">Derek Rux | Founder</p>
      </div>
    </Container>
  );
};

export default Quote;
