import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {loading ? (
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-20 h-20">
            <motion.div
              className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
          <motion.p
            className="mt-6 text-red-500 font-semibold text-lg tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Loading Cineverse...
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black" />
          <div className="absolute -top-40 right-1 w-96 h-96 bg-red-700 opacity-20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 opacity-10 blur-[100px] rounded-full" />

          <motion.h1
            className="relative text-5xl sm:text-6xl font-extrabold bg-linear-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover Movies Instantly!
          </motion.h1>

          <motion.p
            className="relative mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Dive into a world of stories — stream your favorite films anytime, anywhere.
          </motion.p>
          
          <Link to="/home">
            <motion.button
            className="relative mt-10 px-10 py-4 text-lg font-semibold rounded-xl bg-linear-to-r from-red-600 to-red-700 shadow-lg hover:shadow-red-700/50 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Watch More
          </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage