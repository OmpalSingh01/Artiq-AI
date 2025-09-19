
import React, { useRef, useState, useEffect } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 24
      setCurrentIndex(index)
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      })
    }
  }

  const scroll = (direction) => {
    const newIndex =
      direction === 'left'
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, testimonialsData.length - 1)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.children[0].offsetWidth + 24
        const index = Math.round(scrollLeft / cardWidth)
        setCurrentIndex(index)
      }
    }
    const carousel = carouselRef.current
    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonialsData.length
      scrollToIndex(nextIndex)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-16 sm:my-20 py-12 px-4 sm:px-8 md:px-16 lg:px-20"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-neutral-800 text-center">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12 text-center text-sm sm:text-base">
        What Our Users Are Saying
      </p>

      {/* Desktop Grid */}
      <div className="hidden lg:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover shadow-sm"
            />
            <h2 className="text-lg sm:text-xl font-semibold mt-4 text-neutral-800">{t.name}</h2>
            <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
            <div className="flex mt-2 sm:mt-3 mb-3 sm:mb-4">
              {Array(t.stars).fill().map((_, idx) => (
                <img key={idx} src={assets.rating_star} alt="star" className="w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden w-full relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-4 sm:gap-6 py-4 px-2 snap-x snap-mandatory"
        >
          {testimonialsData.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 flex-none w-64 sm:w-72 snap-center flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover shadow-sm"
              />
              <h2 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-neutral-800">{t.name}</h2>
              <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
              <div className="flex mt-2 sm:mt-3 mb-2 sm:mb-4">
                {Array(t.stars).fill().map((_, idx) => (
                  <img key={idx} src={assets.rating_star} alt="star" className="w-4 h-4 sm:w-5 sm:h-5" />
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-3 sm:mt-4">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials
