

import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);

          toast.success("Login successful");
          setTimeout(() => window.location.reload());

          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);

          // toast.success("Account created, please login");
        setTimeout(() => window.location.reload());

          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  return (
    <div
      className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'
      onClick={() => setShowLogin(false)} // close on outside click
    >
      <motion.form
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-10 rounded-xl text-slate-500 w-[90%] max-w-md'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm text-center mt-1'>
          {state === 'Login'
            ? 'Welcome back! Please sign in to continue'
            : 'Create an account to get started with us'}
        </p>

        {/* Name field for Sign Up */}
        {state !== 'Login' && (
          <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img className='size-4.5 filter grayscale opacity-50' src={assets.profile_icon} alt="" />
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              className='outline-none text-sm flex-1'
              placeholder='Full Name'
              required
            />
          </div>
        )}

        {/* Email field */}
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img className='size-4.5' src={assets.email_icon} alt="" />
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            className='outline-none text-sm flex-1'
            placeholder='Email Id'
            required
          />
        </div>

        {/* Password field with toggle */}
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img className='size-4.5' src={assets.lock_icon} alt="" />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            className='outline-none text-sm flex-1'
            placeholder='Password'
            required
          />
          
        </div>

        {state === 'Login' && (
          <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
        )}

        {/* Submit button */}
        <button
          disabled={loading}
          className={`bg-blue-600 w-full text-white py-2 rounded-full mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? "Processing..." : (state === 'Login' ? 'Login' : 'Create Account')}
        </button>

        {/* Switch between Login / Signup */}
        {state === 'Login'
          ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
          : <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
        }

        {/* Close Button */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className='absolute top-5 right-5 cursor-pointer'
        />
      </motion.form>
    </div>
  )
}

export default Login
