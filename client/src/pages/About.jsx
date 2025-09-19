
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import AboutCTA from "../components/AboutCTA";

const About = () => {
  const team = [
    {
      name: "Mohit Singh OM",
      role: "Co-Founder & CEO",
      img: assets.profile_img_6,
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jatan Yadav",
      role: "CTO",
      img: assets.profile_img_7,
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Zara",
      role: "Lead Designer",
      img: assets.profile_img_5,
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ashika",
      role: "Head of Marketing",
      img: assets.profile_img_4,
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-scroll carousel every 3s (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <div className="min-h-screen text-gray-700">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
        >
          About <span className="text-blue-600">Our Platform</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600"
        >
          We believe creativity should have no limits. Our AI Text-to-Image tool
          empowers designers, marketers, and creators to transform simple ideas
          into stunning visuals within seconds.
        </motion.p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 ">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Image */}
    <motion.img
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      src={assets.sample_img_6}
      alt="AI Creativity"
      className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
    />

    {/* Text Content */}
    <div className="space-y-8">
      
      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We make creativity accessible to everyone by providing tools that bring imagination to life. 
          Whether you’re a designer, student, or business professional, we empower you to create visuals without limits.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We envision a future where technology and creativity merge seamlessly. 
          With AI, we remove barriers, save time, and spark innovation across industries.
        </p>
      </motion.div>

    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We embrace cutting-edge AI to push creative boundaries.",
                icon: "💡",
              },
              {
                title: "Simplicity",
                desc: "Our platform is designed to be intuitive and easy to use.",
                icon: "✨",
              },
              {
                title: "Creativity",
                desc: "We empower users to transform ideas into reality instantly.",
                icon: "🎨",
              },
              {
                title: "Trust",
                desc: "We prioritize user privacy, security, and ethical AI use.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="h-1 w-full my-0 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Team Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>

          {/* Mobile Carousel */}
          <div className="sm:hidden relative w-full overflow-hidden">
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white w-72 mx-auto rounded-2xl shadow-lg p-6 flex flex-col items-center"
                >
                  <img
                    src={team[current].img}
                    alt={team[current].name}
                    className="w-28 h-28 rounded-full mb-4 border-4 border-blue-200 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {team[current].name}
                  </h3>
                  <p className="text-sm text-blue-600 mb-4">
                    {team[current].role}
                  </p>
                  <div className="flex gap-5 text-gray-500 text-xl">
                    <a
                      href={team[current].socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={team[current].socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={team[current].socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-800 transition"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {team.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    current === i ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mb-4 border-4 border-blue-500 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 mb-4">{member.role}</p>
                <div className="flex gap-5 text-gray-500 text-xl">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 transition"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      <hr className="h-1 w-full my-0 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transform rotate-180" />



      {/* Call to Action */}

       <AboutCTA />

      
    </div>
  );
};

export default About;
