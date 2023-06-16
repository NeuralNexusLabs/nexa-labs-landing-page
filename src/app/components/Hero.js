import Image from "next/image";
import Navbar from "./Navbar";
import Card from "./Card";
import Product from "./Product";

export default function Hero() {
  return (
    <div className="h-screen">
      <div className="max-w-6xl mx-auto h-[90vh] overflow-y-auto rounded-lg bg-white text-black">
        <Navbar />
        <Card />
        <Product />
      </div>
    </div>
  );
}
