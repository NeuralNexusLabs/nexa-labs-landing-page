import Image from "next/image";
import { SVGComponent, ArrowDown } from "../components/ui/logo";
import { poppins } from "../utils/font";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Image
          src={"/rotated.png"}
          alt="bg"
          layout="fill"
          className="hidden lg:block -z-10 text-center"
        />
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
            <Link href={"#hero"}>
              <ArrowDown />
            </Link>
          </div>
          <div id="hero">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}
