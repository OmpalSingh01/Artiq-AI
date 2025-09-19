
import React, { useRef } from "react";
import { assets } from '../assets/assets'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';



const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs
  .sendForm(
    "service_4b6njuf",   // your Service ID
    "template_buaejmv",  // your Template ID
    form.current,
    "4zFUdX4ayMG9f3lxf"  // your Public Key
  )
  .then((result) => {
    toast.success("🎉 Welcome email sent successfully!");
    form.current.reset();
  })
  .catch((error) => {
    console.error("FAILED...", error);
    toast.error("❌ Failed to send email. Try again!");
  });
  };


  return (
    
    <footer className=" mt-20 bg-transparent text-gray-700">
      {/* Top Section */}
      <hr className="h-1 w-full mx-auto my-8 bg-gray-200 rounded shadow-[0_2px_15px_0_rgba(0,0,0,0.2)]" />
      <div className="max-w-7xl mx-auto px-5 py-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <img src={assets.logoiq} alt="Logo" width={160} className="mb-4" />
          <p className="text-sm text-gray-500">
            Bringing you the best experience with our services. Stay connected with us for
            updates, tips, and exclusive offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-gray-800">Home</a></li>
            <li><a href="/about" className="hover:text-gray-800">About Us</a></li>
            <li><a href="/result" className="hover:text-gray-800">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
          <p className="text-sm text-gray-500 mb-3">
            Get the latest updates, tips & advice directly in your inbox.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email" // ✅ must match your EmailJS template variable
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social + App Badges */}
        <div>
  <h4 className="text-lg font-semibold mb-3">Connect with us</h4>
  <div className="flex gap-3 mb-4">
    <img
  src={assets.facebook_icon}
  alt="Facebook"
  width={35}
  className="cursor-pointer lg:filter lg:grayscale transition duration-300 hover:lg:grayscale-0"
/>
    <img
      src={assets.twitter_icon}
      alt="Twitter"
      width={35}
      className="cursor-pointer lg:filter lg:grayscale transition duration-300 hover:lg:grayscale-0"
    />
    <img
      src={assets.instagram_icon}
      alt="Instagram"
      width={35}
      className="cursor-pointer lg:filter lg:grayscale transition duration-300 hover:lg:grayscale-0"
    />
  </div>

  <div className="flex flex-col gap-2">
    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Google Play"
        width={150}
        className="cursor-pointer lg:filter lg:grayscale transition duration-300 hover:lg:grayscale-0"
      />
    </a>

    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="App Store"
        width={150}
        className="filter grayscale hover:grayscale-0 transition duration-300"
      />
    </a>
  </div>
</div>

        
      </div>
      <hr className="h-1 w-full mx-auto my-4 bg-gray-200 rounded shadow-[0_2px_15px_0_rgba(0,0,0,0.2)] rotate-180" />

      {/* Bottom Bar */}
      <div className="
      py-2 text-center text-sm text-gray-500 ">
        © {new Date().getFullYear()} Mohit Singh ~ OM | All Rights Reserved.
        

      </div>
      
    </footer>
  )
}

export default Footer
