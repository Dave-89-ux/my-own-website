import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" mt-30 ml-30">
          <h1 className="text-5xl font-bold mb-1">Hello, it's Me</h1>
          <h1 className="text-7xl font-bold mb-2">Developer David</h1>
          <p className="text-3xl mb-3">
            I'm a{" "}
            <span className="text-orange-500">fullstack Web Developer</span>
          </p>
          <p className="w-150 text-lg">
            Please hold your breath as we dive into a world full of creativity
            with developer David.
          </p>

          <div className="flex gap-4 items-center mt-10">
            <a
              href="https://wa.me/2348152481363"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
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

        <div className="px-0 py-0 ml-25 md:pl-20 md:pt-20">
            <img
      src="/images/image1.png"
      alt="My picture"
      className="
        w-60 h-60
        sm:w-60 sm:h-60
        md:w-80 md:h-80
        lg:w-100 lg:h-100
        rounded-full
        object-cover
      "
    />
        </div>
      </div>
    </>
  );
}
