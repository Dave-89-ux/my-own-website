// components/Footer.jsx
import { FaInstagram, FaWhatsapp, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400">
            I am a Fullstack Web Developer building responsive, modern websites and apps with passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="./" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400">Email: davidazianglo25@gmail.com.com</p>
          <p className="text-gray-400">Phone: +228 70 75 14 42</p>
          <p className="text-gray-400">Location: Togo</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/dcode441" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition"><FaInstagram size={24} /></a>
            <a href="https://twitter.com/@DAzianglo" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition"><FaXTwitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition"><FaLinkedin size={24} /></a>
            <a href="https://wa.me/2348152481363" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition"><FaWhatsapp size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} David Azianglo. All rights reserved.
      </div>
    </footer>
  );
}
