"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    // Add event listener to track screen width changes
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 552);
    };

    // Initial check for screen width
    handleResize();

    // Add event listener for screen width changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
      className="bg-[#A82730] h-[93px] sticky top-0 left-0 z-30 "
      style={{ fontFamily: "sofia pro" }}
      ref={headerRef}
    >
      <div className="container mx-auto flex items-center h-full  text-[#FFFFFF]  px-3 md:px-0">
        <Link href="/">Catering Menu</Link>
        <div className="flex justify-end md:justify-center grow">
          {isNarrowScreen ? (
            <img
              src="/assets/icons/header/header_logo.svg"
              width={130}
              height={20}
              alt="logo"
            />
          ) : (
            <img
              src="/assets/icons/header/header_logo.svg"
              width={179}
              height={35.5}
              alt="logo"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
