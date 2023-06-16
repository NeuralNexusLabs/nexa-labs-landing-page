import Image from "next/image";
import Navbar from "../Navbar";
import Card from "../Card";
import Product from "../Product";
import Footer from "../Footer";

export default function Hero() {
  return (
    //Make the below div h-[90vh] if you want scrollbar to appear
    <div className="max-w-6xl mx-auto h-auto overflow-y-auto rounded-lg bg-white text-black">
      <Navbar />
      <Card />
      <Product />
      <Footer />
    </div>
  );
}
