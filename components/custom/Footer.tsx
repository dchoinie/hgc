import React from "react";
import Container from "./Container";
import { Mail, Phone, MapIcon } from "lucide-react";
import Link from "next/link";
import { NavItem } from "./Header";
import { navItems } from "./Header";

interface IconLink {
  icon: React.ReactNode;
  label: string;
  link: string;
}

interface LegalItem {
  label: string;
  link: string;
}

const iconLinks: IconLink[] = [
  {
    icon: <Mail />,
    label: "cs@herbgardenco.com",
    link: "mailto:cs@herbgardenco.com",
  },
  {
    icon: <Phone />,
    label: "612-208-2626",
    link: "tel:+1234567890",
  },
  {
    icon: <MapIcon />,
    label: "Dayton, MN",
    link: "https://www.google.com/maps",
  },
];

const legalItems: LegalItem[] = [
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    label: "Shipping & Returns",
    link: "/shipping-returns",
  },
  {
    label: "COA",
    link: "/coa",
  },
];

const Footer = () => {
  // Filter out nav items that have React nodes as labels
  const footerNavItems = navItems.filter(
    (item) => typeof item.label === "string"
  );

  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t py-6">
      <Container>
        <div>
          <div className="flex justify-between py-4">
            <div className="flex flex-col">
              <img
                src="https://placehold.co/400"
                alt="logo"
                className="w-[80px] h-[80px]"
              />
              <p className="text-gray-600 my-3">
                Plant-Powered Wellness, Backed by Science.​
              </p>
              <div className="flex flex-col gap-2">
                {iconLinks.map((link: IconLink) => (
                  <Link
                    href={link.link}
                    key={link.link}
                    className="flex items-center"
                  >
                    <span className="text-gray-600 mr-2">{link.icon}</span>
                    {link.label && (
                      <span className="text-gray-600">{link.label}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col text-gray-600">
              <h3 className="text-lg font-bold mb-3">Navigation</h3>
              <ul className="flex flex-col gap-2">
                {footerNavItems.map((item: NavItem) => (
                  <li key={item.link}>{item.label}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-gray-600">
              <h3 className="text-lg font-bold mb-3">Legal</h3>
              <ul className="flex flex-col gap-2">
                {legalItems.map((item: LegalItem) => (
                  <li key={item.link}>{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
