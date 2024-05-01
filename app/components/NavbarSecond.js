"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../utils/constants";
import Image from "next/image";

const NavbarSecond = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-[#FFF7E4] top-0 left-0 right-0 z-10">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
        >
          <Image src="/logo.png" width="100" height="100"/>
        </Link>

      </div>
    </nav>
  );
};

export default NavbarSecond;
