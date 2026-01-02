'use client';

import Image from 'next/image';
import { Typography } from '@material-tailwind/react';

// Daftar logo klien (sesuai file di public/image/)
const CLIENTS = [
  { name: 'bsi', file: '/image/bsi.png' },
  { name: 'Udemy-Logo', file: '/image/Udemy-Logo.png' },
  { name: 'itbox-01', file: '/image/itbox-01.png' },
  { name: 'bnsp', file: '/image/bnsp.png' },
  { name: 'lfi', file: '/image/lfi.png' },
];

export function PopularClients() {
  return (
    <section id="education" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            Pendidikan & Bootcamp
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Riwayat Pendidikan & Bootcamp
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
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

export default PopularClients;
