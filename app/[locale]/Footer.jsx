"use client";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();
  const locale = params.locale;
  return (
    <footer className=" bg-[#E5E5E5] py-[3rem] relative z-40">
      <div className="container mx-auto px-2 text-center md:text-start">
        <div className="my-3 md:flex md:gap-20  ">
          <div className="mb-5 text-[#3B2222] w-[180px] mx-auto md:mx-0">
            <h1
              style={{ fontFamily: "Helvetica Neue LT Pro" }}
              className="md:mb-3"
            >
              Times Rewards
            </h1>
            <p style={{ fontFamily: "sofia pro" }}>Earn points, save money</p>
            <Link
              href="/"
              style={{
                fontFamily: "sofia pro",
                color: "#A82730",
                fontWeight: "bold",
              }}
            >
              How It Works
            </Link>
          </div>
          <div className="text-[#3B2222] w-[180px] mx-auto md:mx-0">
            <h1
              style={{ fontFamily: "Helvetica Neue LT Pro" }}
              className="md:mb-3"
            >
              Careers
            </h1>
            <p style={{ fontFamily: "sofia pro" }}>Come join the Team</p>
            <Link
              href="/"
              style={{
                fontFamily: "sofia pro",
                color: "#A82730",
                fontWeight: "bold",
              }}
            >
              Join Our Team
            </Link>
          </div>
        </div>
        <hr className="h-[0.2rem] bg-[#ccc] w-[90%] mx-auto md:w-[100%]" />
        <div
          className="text-[#3B2222] my-5 md:flex md:items-baseline md:gap-20  "
          style={{ fontFamily: "sofia pro" }}
        >
          <div className="flex flex-col gap-1 mb-1 w-[180px] mx-auto md:mx-0">
            <Link href="/">Contact us</Link>
            <Link href="/">About us</Link>
          </div>
          <div className="flex flex-col gap-1 w-[180px] mx-auto md:mx-0">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
          </div>
          <div className="my-3 w-[180px] mx-auto md:mx-0">
            <h1 style={{ fontWeight: "bold" }} className="text-2xl">
              Connect with us
            </h1>
            <div className="flex gap-10 justify-center md:justify-start  mt-3">
              <img
                src="./assets/images/footer/facebook.svg"
                className="inline-block"
              />
              <img
                src="./assets/images/footer/insta.svg"
                className="inline-block"
              />
              <img
                src="./assets/images/footer/twitter.svg"
                className="inline-block"
              />
            </div>
          </div>
        </div>
        <hr className="h-[0.2rem] bg-[#ccc] w-[90%] mx-auto md:w-[100%]" />
        <div
          className="flex flex-col items-center my-3 md:flex-row "
          style={{ fontFamily: "sofia pro" }}
        >
          <p>TM & © Tim Hortons, {new Date().getFullYear()}</p>
          <div className="mx-[19.5rem]">
            <img
              src="./assets/images/footer/language.png"
              className="w-[4rem] inline-block"
            />
            <Dropdown
              name={locale.toLowerCase() == "en" ? "En" : "Ar"}
              options={["Ar", "En"].filter(
                (language) => language.toLowerCase() != locale.toLowerCase()
              )}
              isLanguage={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
