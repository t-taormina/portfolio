import React from "react";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center"
    >
      <div className="flex flex-row items-center">
        {/* Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/tktaormina/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/t-taormina"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <Link href="#contact">
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <EnvelopeIcon className="text-gray-400/50 h-7 w-7" />
          <p className="px-5 uppercase font-semibold hidden md:inline-flex text-sm text-gray-400">
            Contact Me
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
