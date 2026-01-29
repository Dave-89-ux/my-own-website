"use client"

import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import ContactForm from "./components/contactForm";

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12">
        {/* TEXT */}
        <div className="mt-24 md:mt-32 md:ml-32">
          <h1 className="text-5xl font-bold mb-1">Hello, it's Me</h1>
          <h1 className="text-7xl font-bold mb-2">Developer David</h1>

          <p className="text-3xl mb-3">
            I'm a{" "}
            <span className="text-orange-500">fullstack Web Developer</span>
          </p>

          <p className="max-w-xl text-lg">
            Please hold your breath as we dive into a world full of creativity
            with developer David.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 items-center mt-10">
            <a
              href="https://wa.me/2348152481363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaWhatsapp size={35} />
            </a>

            <a
              href="https://instagram.com/dcode441"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={35} />
            </a>

            <a
              href="https://twitter.com/@DAzianglo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition"
            >
              <FaXTwitter size={35} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src="/images/image1.png"
            alt="My picture"
            className="
              w-72 h-72
              md:w-80 md:h-80
              lg:w-96 lg:h-96
              rounded-full
              object-cover
            "
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="min-h-screen flex items-center px-6 py-10" id="about">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-orange-500 opacity-30 blur-xl"></div>
              <div className="w-64 h-64 rounded-full border-4 border-orange-500 flex items-center justify-center mt-20">
                <img
                  src="/images/image2.png"
                  alt="my photo"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="md:pl-20">
            <h2 className="text-4xl font-bold">
              About <span className="text-orange-500">Me</span>
            </h2>
            <h4 className="mt-2 text-lg">Full-Stack Web Developer</h4>
            <p className="mt-4 leading-relaxed max-w-xl">
              Hello, i'm David, a passionate web developer who enjoys building
              clean, responsive, and user-friendly websites. I specialize in
              modern web technologies and love turning ideas into real,
              functional products. i've worked on personal and client projects,
              focusing on performance, design, and usability. i'm always
              learning, improving my skills, and exploring new tools to create
              better digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="py-20 px-6" id="services">
        <h2 className="text-center text-3xl font-semibold mb-14">
          Our <span className="text-orange-500">services</span>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          {/* SERVICE 1 */}
          <div className="text-center px-6 py-10 rounded-xl border border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Website Development</h3>

            <p className="text-gray mb-6 text-justify">
              I build complete, modern web applications by working on both the
              frontend and backend of a project. From designing responsive user
              interfaces to developing secure server-side logic and databases, i
              ensure every part of the website works smoothly together. My focus
              is on performance, scalability, clean code, and creating digital
              solutions that are easy to use, reliable and built to grow with
              future needs.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div className="text-center px-6 py-10 rounded-xl border border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>

            <p className="text-gray mb-6 text-justify">
              I create visually appealing, responsive, and user-friendly
              interfaces that bring ideas to life on the web. My work focuses on
              building smooth layouts, interactive components, and consistent
              designs that work perfectly across different devices and screen
              sizes. By combining modern frontend technologies with good UI/UX
              principles, i ensure every interface is fast, accessible, and easy
              for users to navigate.
            </p>
          </div>

          {/* SERVICE 3 */}
          <div className="text-center px-6 py-10 rounded-xl border border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">
              Backend & API Services
            </h3>

            <p className="text-gray mb-6 text-justify">
              I build reliable and secure backend systems that power web
              applications behind the scenes. This includes designing efficient
              server logic, creating well-structured APIs, and managing
              databases to ensure smooth data flow between the frontend and
              backend. My focus is on performance, security, and scalability.
            </p>
          </div>
        </div>
      </div>
      <div id="contact">
      <ContactForm />
      </div>
    </>
  );
}
