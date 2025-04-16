import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

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
          <div>
            <img
              src="https://placehold.co/400"
              alt="logo"
              className="w-[80px] h-[80px]"
            />
          </div>
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
