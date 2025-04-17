import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";

export interface NavItem {
  label: string | React.ReactNode;
  link: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Shop", link: "/shop" },
  { label: "Educational Content", link: "/educational-content" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
  { label: <User />, link: "/login" },
  { label: <ShoppingCart />, link: "/cart" },
];

const Header = () => {
  return (
    <div className="py-4">
      <Container>
        <div className="flex justify-between">
          <Image
            src="/logo1.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[50px] object-contain"
          />
          <div className="flex gap-12 items-center">
            {navItems.map((item: NavItem) => (
              <div key={item.link}>
                <Link href={item.link}>{item.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
