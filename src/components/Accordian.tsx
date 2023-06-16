import { outfit } from "../utils/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function ContactAccordian() {
  return (
    <Accordion
      type="single"
      collapsible
      className={`max-w-sm mx-auto ${outfit.className} my-10`}
    >
      <AccordionItem value="item-1" className="text-2xl">
        <AccordionTrigger className="bg-slate-900 rounded-full text-white px-5">
          Let’s talk
        </AccordionTrigger>
        <AccordionContent className="text-base">
          Want to work with us, ask a question, or just chat? Drop us a message
          and We’ll get back to you{" "}
          <span className="font-bold">within 48 hours.</span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
