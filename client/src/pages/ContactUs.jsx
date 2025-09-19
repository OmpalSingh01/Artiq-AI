
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { AiOutlineForm } from "react-icons/ai";

import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const popupRef = useRef(null);

   const formRef = useRef();

  const popupItems = [
    {
      name: "Email",
      icon: <SiGmail className="w-6 h-6" />,
      bg: "bg-red-500",
      href: "mailto:rheniumgroup@gmail.com",
      action: "link",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="w-6 h-6" />,
      bg: "bg-green-500",
      href: "https://wa.me/917233828073",
      action: "link",
    },
    {
      name: "Form",
      icon: <AiOutlineForm className="w-6 h-6" />,
      bg: "bg-purple-500",
      action: "modal",
    },
  ];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // Handle form submit with EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_klodu2m", // Your Service ID
        "template_8ttsx2n", // Your Template ID
        formRef.current,
        "4zFUdX4ayMG9f3lxf" // Your Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
          setShowModal(false);
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen text-gray-700 relative">
      {/* Hero */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions or ideas? Reach out directly via Email, WhatsApp, or
          send us a message through our form.
        </motion.p>
        <motion.p
          className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our support team is available{" "}
          <span className="font-medium text-gray-700">24/7</span> to assist you.
          Whether you have a question, feedback, or need help with our services,
          we aim to respond as quickly as possible. Your satisfaction is our top
          priority!
        </motion.p>
      </motion.section>

      {/* Divider */}
      <motion.hr
        className="h-1 w-32 mx-auto my-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Contact Info Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          How <span className="text-blue-600">You Can Reach Us</span>
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          Our support team is always ready to assist you. Whether you have a
          question, feedback, or need help with our services, you can reach us
          via Email, WhatsApp, or our Contact Form. We aim to respond as quickly
          as possible to ensure you have a smooth experience.
        </p>

        {/* Contact Details */}
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "Email",
              icon: <SiGmail />,
              color: "text-red-500",
              btn: (
                <a
                  href="mailto:rheniumgroup@gmail.com"
                  className="inline-block px-6 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition"
                >
                  Send Email
                </a>
              ),
              info: "support@artiq.com",
            },
            {
              title: "WhatsApp",
              icon: <SiWhatsapp />,
              color: "text-green-500",
              btn: (
                <button
                  onClick={() =>
                    window.open("https://wa.me/917233828073", "_blank")
                  }
                  className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
                >
                  Chat Now
                </button>
              ),
              info: "+91 72338XXXX3",
            },
            {
              title: "Contact Form",
              icon: <AiOutlineForm />,
              color: "text-purple-500",
              btn: (
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
                >
                  Open Form
                </button>
              ),
              info: "Fill out our contact form and we will get back to you promptly.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className={`${item.color} text-5xl mb-4 flex justify-center`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.info}</p>
              {item.btn}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          className="text-gray-500 text-sm mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Response Time: Typically within{" "}
          <span className="font-medium text-gray-700">24 hours</span>. Our
          support team is available{" "}
          <span className="font-medium text-gray-700">
            Monday to Sunday, 9 AM to 9 PM
          </span>
          . We value your feedback and queries and strive to provide the best
          assistance possible.
        </motion.p>
      </motion.section>

      {/* Floating Button with Popup */}
      <div
        ref={popupRef}
        className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4"
      >
        <AnimatePresence>
          {showPopup &&
            popupItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer ${item.bg} hover:scale-110 transition transform`}
                onClick={() => {
                  if (item.action === "modal") setShowModal(true);
                  else if (item.action === "link")
                    window.open(item.href, "_blank");
                }}
              >
                {item.icon}
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setShowPopup((prev) => !prev)}
          className="w-16 h-16 rounded-full bg-blue-600 text-white text-3xl shadow-2xl hover:scale-110 transition transform"
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotate: 10 }}
        >
          💬
        </motion.button>
      </div>



      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl w-full max-w-lg p-8 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-800"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Send a Message
              </h2>


               <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
