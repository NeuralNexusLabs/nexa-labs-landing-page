import Link from "next/link";
import { SVGComponent, ArrowDown } from "../components/ui/logo";
import Hero from "../components/layout/Hero";
import { outfit, poppins } from "../utils/font";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col justify-center">
        <div className="flex justify-center my-6">
          <SVGComponent />
        </div>
        <div className="text-center">
          <p
            className={`${poppins.className} font-light text-[20px] max-w-xl mx-auto`}
          >
            The future of strategy and digital product delivery.
          </p>
          <p
            className={`${poppins.className} font-light text-[20px] max-w-xl mx-auto`}
          >
            <span className="block">Our unique AI-powered approach</span>{" "}
            delivers unmatched efficiency and cost savings.
          </p>
          <div className="flex justify-center my-5">
            <Link
              href={"#hero"}
              className="scroll-smooth transition duration-300 transform hover:-translate-y-2 hover:scale-90"
            >
              <ArrowDown />
            </Link>
          </div>
          <div id="hero">
            <Hero />
          </div>
          <p
            className={`flex justify-center ${outfit.className} py-3 font-normal`}
          >
            © 2023 — Privacy Policy. NexaLabs
          </p>
        </div>
      </div>
    </>
  );
}
