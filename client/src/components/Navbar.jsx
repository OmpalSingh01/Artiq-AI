
import React, { useContext, useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()

  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const profileRef = useRef(null)

  // detect screen size for mobile/desktop toggle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // sticky on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close dropdown on outside click/touch and on Escape key
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    window.location.reload();
  }


  const LogoutButton = (
  <button
    onClick={handleLogout}
    className="
      w-full inline-flex items-center justify-center gap-2
      px-4 py-2 text-sm font-medium
      rounded-full border border-gray-200
      bg-gradient-to-r from-gray-50 to-white
      text-gray-700
      hover:from-red-50 hover:to-white hover:text-red-600 hover:border-red-200
      shadow-sm hover:shadow-md
      transition-all duration-200 ease-in-out
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-300
    "
    aria-label="Logout"
    type="button"
  >
    {/* logout icon */}
    <svg xmlns="http://www.w3.org/2000/svg" 
      className="h-4 w-4" fill="none" viewBox="0 0 24 24" 
      stroke="currentColor" strokeWidth="2" aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 
        2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1" />
    </svg>
    <span className="leading-none">Logout</span>
  </button>
)

  const renderProfileDropdown = () => (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.12 }}
          className="absolute top-9 right-0 z-50  p-2 min-w-[150px]"
        >
          <div className="w-full">{LogoutButton}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const ProfileWrapper = () => (
    <div
      className="relative"
      ref={profileRef}
      {...(!isMobile
        ? { onMouseEnter: () => setMenuOpen(true), onMouseLeave: () => setMenuOpen(false) }
        : {})}
    >
      <button
        aria-haspopup="true"
        aria-expanded={menuOpen}
        onClick={() => isMobile && setMenuOpen((v) => !v)}
        className="rounded-full p-0 focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
        type="button"
      >
        <img src={assets.profile_iconn} className="w-10 drop-shadow cursor-pointer" alt="profile" />
      </button>
      {renderProfileDropdown()}
    </div>
  )

  return (
    <>
      <AnimatePresence>
        {isScrolled ? (
          <motion.div
            key="sticky-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md"
          >
            <div className="flex items-center justify-between py-4 px-4 sm:px-8">
              <Link to="/">
                <img src={assets.logoiq} alt="logo" className="w-28 sm:w-32 lg:w-40" />
              </Link>
              <div>
                {user ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => navigate('/buy')}
                      className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
                    >
                      <img className="w-5" src={assets.credit_star} alt="credit" />
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left : {credit}</p>
                    </button>
                    <p className="text-gray-600 pl-2">Hi, {user.name}</p>
                    <ProfileWrapper />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 sm:gap-5">
                    <p onClick={() => navigate('/buy')} className="cursor-pointer pt-1">Pricing</p>
                    <button onClick={() => setShowLogin(true)} className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">Login</button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between py-4 px-4 sm:px-8">
              <Link to="/">
                <img src={assets.logoiq} alt="logo" className="w-28 sm:w-32 lg:w-40" />
              </Link>
              <div>
                {user ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => navigate('/buy')}
                      className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
                    >
                      <img className="w-5" src={assets.credit_star} alt="credit" />
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left : {credit}</p>
                    </button>
                    <p className="text-gray-600 pl-2">Hi, {user.name}</p>
                    <ProfileWrapper />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 sm:gap-5">
                    <p onClick={() => navigate('/buy')} className="cursor-pointer pt-1">Pricing</p>
                    <button onClick={() => setShowLogin(true)} className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">Login</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
