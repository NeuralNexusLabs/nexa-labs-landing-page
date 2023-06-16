"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ottbk6c",
        "template_ujdwa8g",
        form.current,
        "IbjdJH9G8t82Qps09",
        setLoading(true)
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Message sent successfully", {
            style: {
              border: "1px solid black",
              background: "rgb(15 23 42)",
              color: "#fff",
            },
          });
          console.log(result.text);
          console.log("message sent");
          router.push("/");
        },
        (error) => {
          toast.error("Something went wrong", {
            style: {
              border: "1px solid black",
              background: "rgb(15 23 42)",
              color: "#fff",
            },
          });
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-4 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-start text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="name@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              className="shadow-sm px-4 py-6 text-base rounded-lg bg-slate-900 text-white block w-full"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-start text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <Input
              type="text"
              id="subject"
              className="shadow-sm px-4 py-6 text-sm rounded-lg bg-slate-900 text-white block w-full "
              placeholder="Let us know how we can help you"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="user_subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-start mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <Textarea
              id="message"
              className="shadow-sm text-sm rounded-lg bg-slate-900 text-white block w-full h-32 pt-3"
              placeholder="Leave a message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="user_message"
            />
          </div>
          <Button
            type="submit"
            className="py-3 px-5 text-sm font-medium hover:bg-slate-900 hover:text-white transition-all ease-in-out duration-300"
            variant={"outline"}
            disabled={loading}
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
