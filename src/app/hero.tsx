'use client';

import Image from 'next/image';
import { Input, Button } from '@material-tailwind/react';

import {
  Typography as MT_Typography,
  Breadcrumbs as MT_Breadcrumbs,
} from '@material-tailwind/react';

const Typography = MT_Typography as any;
const Breadcrumbs = MT_Breadcrumbs as any;

import { cv } from '../../data/cv';
import { Server, Mail } from 'lucide-react';

function Hero() {
  const { profile } = cv;

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid min-h-[60vh] w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Text */}
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-3xl lg:text-5xl !leading-tight"
          >
            {profile.name}
            <br />
            <span className="text-sm text-gray-600">{profile.title}</span>
          </Typography>

          {/* Breadcrumbs */}
          <Breadcrumbs className="mb-4">
            <span className="flex items-center gap-1 opacity-70">
              <Server className="h-4 w-4" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 opacity-70"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </Breadcrumbs>

          {/* Summary */}
          <Typography
            variant="lead"
            className="mb-6 !text-gray-700 md:pr-16 xl:pr-28"
          >
            {profile.summary}
          </Typography>
        </div>

        {/* Image */}
        <Image
          width={1024}
          height={1024}
          alt="Hero Image"
          src="/image/foto.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
          priority
        />
      </div>
    </header>
  );
}

export default Hero;
