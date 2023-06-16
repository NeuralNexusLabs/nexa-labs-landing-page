import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import { ContactAccordian } from "../Accordian";

export default function HeroContact() {
  return (
    // <div className="h-screen">
    <div className="max-w-6xl mx-auto h-auto overflow-y-auto rounded-lg bg-white text-black">
      <Navbar />
      <ContactAccordian />
      <ContactForm />
      <Footer />
    </div>
    // </div>
  );
}
