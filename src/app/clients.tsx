'use client';

import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

// Daftar logo klien (sesuai file di public/image/)
const CLIENTS = [
  { name: 'logosmu', file: '/image/logosmu.png' },
  { name: 'DMK', file: '/image/dmk.png' },
  { name: 'SMU', file: '/image/smu.png' },
  { name: 'Tulus2', file: '/image/tulus2.png' },
  { name: 'hpm', file: '/image/hpm.jpg' },
  { name: 'wirasaba', file: '/image/wirasaba.jpg' },
];

export function Clients() {
  return (
    <section className="px-8 py-28 bg-gray-80">
      <div className="container mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray">
            Professional Experience
          </h2>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((client, index) => (
            <div key={index} className="w-40 h-24 relative">
              <Image
                src={client.file}
                alt={client.name}
                fill
                style={{ objectFit: 'contain' }}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
