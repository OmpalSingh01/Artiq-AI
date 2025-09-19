
import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credit purchase',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + '/api/user/verify-razor',
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate('/');
            toast.success('Credit Added Successfully ✅');
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
      const { data } = await axios.post(
        backendUrl + '/api/user/pay-razor',
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-16 pb-16 "
    >
      <button className="px-8 py-2 mb-6 font-semibold rounded-full border border-gray-300 hover:bg-gray-200 transition">
        Our Plans
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 ">Choose Your <span className="text-blue-600">Plan</span></h1>

      <p className="text-gray-600 text-center mb-6">

  Choose the perfect plan that fits your creative needs. Upgrade your imagination, unlock premium features, and bring your ideas to life faster and smarter!
</p><br />

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-xl shadow-lg border border-gray-200 p-10 w-64 flex flex-col items-center transition-all"
          >
            {item.mostPopular && (
              <span className="absolute top-3 right-3 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Popular
              </span>
            )}
            <img src={assets.logo_icon} width={50} alt="logo" className="mb-4" />
            <p className="text-lg font-semibold text-gray-700">{item.id}</p>

            <p className="text-gray-800 font-medium text-sm text-center mt-2">{item.desc}</p>

            <p className="text-gray-500 text-sm text-center mt-2">{item.tips}</p>

            <p className="text-gray-500 text-sm text-center mt-2">{item.tips2}</p>

            


            <p className="mt-6 text-2xl font-bold text-gray-800">
              ₹{item.price} <span className="text-base font-medium text-gray-500">/ {item.credits} credits</span>
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium transition-all shadow-md"
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;

