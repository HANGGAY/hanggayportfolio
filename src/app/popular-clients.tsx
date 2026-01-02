'use client';

import Image from 'next/image';
import { Typography as MT_Typography } from '@material-tailwind/react';

const Typography = MT_Typography as any;

const CLIENTS = [
  { name: 'BSI', file: '/image/bsi.png' },
  { name: 'Udemy', file: '/image/Udemy-Logo.png' },
  { name: 'ITBOX', file: '/image/itbox-01.png' },
  { name: 'BNSP', file: '/image/bnsp.png' },
  { name: 'LFI', file: '/image/lfi.png' },
];

export function PopularClients() {
  return (
    <section id="education" className="px-8 py-8 lg:py-20">
      <div className="container mx-auto grid place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            Pendidikan & Bootcamp
          </Typography>

          <Typography variant="h2" color="blue-gray" className="mb-4">
            Riwayat Pendidikan & Bootcamp
          </Typography>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((client, index) => (
            <div key={index} className="relative h-24 w-40">
              <Image
                src={client.file}
                alt={client.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
