"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_n9quflm", // Your service ID
        "template_aulu2tp", // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6-Nc8B6DHiOVw9VeT" // Your public key
      );

      if (result.status === 200) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const contactDetails = [
    { icon: <MapPin size={24} />, text: "Lucknow, Uttar Pradesh, India" },
    {
      icon: <Phone size={24} />,
      text: "+91 7081660941",
      href: "tel:+917081660941",
    },
    {
      icon: <Mail size={24} />,
      text: "abhishektiwari6827@gmail.com",
      href: "mailto:abhishektiwari6827@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-500 p-3 rounded-full">{detail.icon}</div>
              <div>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span className="text-gray-300">{detail.text}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows="4"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} className="mr-2" />
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <motion.p
              className={`text-center ${
                message.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
