
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center my-24 px-6 sm:px-10 lg:px-20 xl:px-28"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 -z-10" />

      {/* Section Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-neutral-900 tracking-tight text-center">
        Create AI Images
      </h1>
      <p className="text-lg text-gray-500 mb-14 text-center max-w-2xl">
        Turn your imagination into stunning, high-quality visuals in seconds
      </p>

      {/* Content */}
      <div className="flex flex-col gap-12 lg:gap-20 lg:flex-row items-center">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative"
        >
          <img
            src={assets.sample_img_1}
            className=" w-72 sm:w-80 xl:w-96 rounded-2xl shadow-xl hover:shadow-2xl object-cover transition-all duration-500"
            alt="AI generated sample"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="backdrop-blur-md  p-8 rounded-2xl    max-w-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-neutral-900">
            Introducing the <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">AI-Powered Text to Image Generator</span>
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed text-lg">
            Effortlessly bring your ideas to life with our premium AI image generator. 
            Transform simple text prompts into breathtaking visuals — fast, simple, and powerful.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Whether it’s product visuals, portraits, or futuristic concepts, our cutting-edge AI delivers 
            results that spark creativity. Imagine it, describe it, and let AI craft it with precision.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Description
