import React from "react";
import Container from "./Container";
import { Mail, Phone, MapIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { NavItem } from "./Header";
import { navItems } from "./Header";
import Image from "next/image";

interface IconLink {
  icon: React.ReactNode;
  label: string;
  link: string;
}

interface LegalItem {
  label: string;
  link: string;
}

interface SocialIcon {
  icon: React.ReactNode;
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

const socialIcons: SocialIcon[] = [
  {
    icon: (
      <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
    ),
    link: "https://www.facebook.com/herbgardenco",
  },
  {
    icon: (
      <Image
        src="/icons/instagram.svg"
        alt="Instagram"
        width={20}
        height={20}
      />
    ),
    link: "https://www.instagram.com/herbgardenco",
  },
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/company/herbgardenco",
  },
];

const Footer = () => {
  // Filter out nav items that have React nodes as labels
  const footerNavItems = navItems.filter(
    (item) => typeof item.label === "string"
  );

  return (
    <footer className="border-t pt-6 bg-[#f4f0ef]">
      <Container>
        <div>
          <div className="flex justify-between py-4">
            <div className="flex flex-col">
              <Image
                src="/logo2.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto self-start h-[150px] object-contain"
              />
              <p className="text-gray-600 my-6">
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
                  <Link key={item.link} href={item.link}>
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-gray-600">
              <h3 className="text-lg font-bold mb-3">Legal</h3>
              <ul className="flex flex-col gap-2">
                {legalItems.map((item: LegalItem) => (
                  <Link key={item.link} href={item.link}>
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6 text-gray-600 mt-3">
            {socialIcons.map((icon: SocialIcon) => (
              <Link key={icon.link} href={icon.link}>
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 my-12">
          <h6>Powered by</h6>
          <Image src="/icons/square.svg" alt="Square" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-3 text-gray-500">
          <p className="text-xs text-justify">
            These statements have not been evaluated by the Food and Drug
            Administration. These products do not claim to diagnose, treat,
            cure, or prevent any disease. The Delta-9 Tetrahydrocannabinol
            contained in these products does not exceed 0.3% on a dry weight
            basis and is derived from hemp. Do not use these products if you are
            pregnant, nursing, suffering from any medical condition(s), or on
            medication. Consult your healthcare provider before consuming. Keep
            out of reach of children and animals. This product may impair your
            ability to drive or operate machinery and you should not drive or
            operate heavy machinery under the influence of these products.
          </p>
          <p className="text-xs text-justify">
            Any mention of THC within the Herb Garden Co. website refers
            exclusively to hemp-derived THC. These products are crafted in
            accordance with applicable state laws and regulations, and contain
            less than .3% THC. The effects of THC can vary between individuals
            and consumption should be done responsibly (you may want to consult
            with a healthcare provider first).
          </p>
          <p className="text-xs text-justify">
            Furthermore, Herb Garden Co. encourages consumers to be aware of and
            comply with laws and regulations regarding the possession and use of
            cannabis products. The information provided on this website is
            intended for educational and entertainment purposes only and should
            not be considered as professional or medical advice.
          </p>
        </div>
      </Container>
      <div className="bg-brand-green text-white text-center py-4 mt-6 text-sm">
        <span>
          &copy; {new Date().getFullYear()} Herb Garden Co., All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
