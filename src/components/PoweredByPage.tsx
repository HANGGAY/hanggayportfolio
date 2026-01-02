'use client';

import { motion } from 'framer-motion';

export default function PoweredByPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line Left */}
        <motion.path
          d="M50 300 H420 V160 H600"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(56,189,248,0.8))',
          }}
        />

        {/* Line Right */}
        <motion.path
          d="M1150 300 H780 V440 H600"
          stroke="#facc15"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(250,204,21,0.8))',
          }}
        />

        {/* Vertical Line */}
        <motion.path
          d="M600 50 V200"
          stroke="#94a3b8"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </svg>

      {/* Center Card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 rounded-xl bg-gray-800 px-10 py-6 shadow-2xl"
      >
        <h3 className="text-xl font-semibold tracking-wide text-white">
          Powered By
        </h3>
      </motion.div>
    </section>
  );
}
