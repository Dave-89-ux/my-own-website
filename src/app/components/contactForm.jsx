"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch {
      setStatus("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b1220] px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          Contact <span className="text-orange-500">Me!</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111827] border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111827] border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111827] border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111827] border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 w-full rounded-lg bg-[#111827] border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 resize-none"
          />

          <div className="md:col-span-2 text-center">
            <button
              disabled={loading}
              className="mt-4 rounded-full bg-orange-500 px-10 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-4 text-sm text-slate-300">{status}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
