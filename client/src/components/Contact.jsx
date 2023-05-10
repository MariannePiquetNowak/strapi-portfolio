import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
  // Formulaire de contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const btn = useRef();

  /* Vérification form */

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (response) => {
          btn.current.textContent = "Message sent!";
          console.log("SUCCESS!", response.status, response.text);
          if(response.status === 200) {
            setTimeout(() => {
              form.current.reset();
              btn.current.textContent = "Send message";
            }, 2000);
          }
        },
      )
      .catch((err) => {
        console.log("FAILED...", err);
      });

  };

  return (
    <section
      id="Contact"
      className="reveal p-6 md:p-8 xl:mx-0 flex flex-col items-center justify-center active"
    >
      <div className="xl:px-[2em] lg:h-auto">
        <div className="contact__info py-5 lg:mr-6 w-full flex flex-col">
          <div className="contact__image flex flex-col items-end mb-8 md:mb-0 w-full"></div>
          <div className="contact__content w-full">
            <div className="flex items-end mb-8">
              <Image
                src={`/images/arrow-circle-gradient.svg`}
                className="arrow-circle w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
                width={10}
                height={10}
                alt="arrow-circle"
              />
              <h1>Contact me</h1>
            </div>
            <p className="pb-3">
              I am interested in ambitious and team-based project opportunities.
            </p>
            <p className="pb-3">
              However, if you have other request or questions, don’t hesitate to
              use the form.{" "}
            </p>
            <div className="contact__form flex justify-start w-full">
              <form
                className="flex flex-col w-full"
                ref={form}
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <div className="flex flex-col w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value=""
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="text">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <button className="submit mt-5" ref={btn}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
