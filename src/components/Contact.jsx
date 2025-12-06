"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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
    <div ref={sectionRef} className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -60, rotateX: -25, scale: 0.85 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
            : { opacity: 0, y: -60, rotateX: -25, scale: 0.85 }
        }
        transition={{ duration: 0.8, type: "spring", stiffness: 85 }}
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, x: -80, rotateY: -20, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, rotateY: 0, scale: 1 }
                  : { opacity: 0, x: -80, rotateY: -20, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {detail.icon}
              </motion.div>
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
          className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
          initial={{ opacity: 0, x: 80, rotateY: 20, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, rotateY: 0, scale: 1 }
              : { opacity: 0, x: 80, rotateY: 20, scale: 0.8 }
          }
          transition={{
            duration: 0.7,
            delay: 0.3,
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
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
