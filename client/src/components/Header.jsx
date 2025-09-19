
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.section
      className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 bg-white/90 px-6 py-1.5 rounded-full border border-neutral-300 shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-stone-500">Best text to image generator</p>
        <img src={assets.star_icon} alt="icon" className="h-4 w-4" />
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn text to{" "}
        <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-centre max-w-xl mx-auto mt-5 text-neutral-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md hover:shadow-lg mt-8 px-10 sm:px-12 py-2.5 flex items-center gap-2 rounded-full  hover:scale-105 transition-all duration-500 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.1 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="star" />
      </motion.button>

      {/* Sample Images */}

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
  className="flex flex-wrap justify-center mt-16 gap-3 sm:gap-4"
>
  {[
    assets.sample_img_1,
    assets.sample_img_2,
    assets.sample_img_3,
    assets.sample_img_4,
    assets.sample_img_5,
    assets.sample_img_6,
  ].map((imgSrc, index) => (
    <motion.img
      key={index}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer w-14 sm:w-20 md:w-24 lg:w-28 object-cover"
      src={imgSrc}
      alt={`generated ${index + 1}`}
    />
  ))}
</motion.div>




      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-4 text-neutral-600 text-sm"
      >
        Generated images from <span className="font-medium">artiqAI</span>
      </motion.p>
    </motion.section>
  )
}

export default Header
