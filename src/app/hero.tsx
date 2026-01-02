'use client';

import Image from 'next/image';
import {
  Input,
  Button,
  Typography,
  Breadcrumbs,
} from '@material-tailwind/react';
import { cv } from '../../data/cv';
import { Server, Mail } from 'lucide-react';

function Hero() {
  const { profile } = cv;

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Teks */}
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            {profile.name} <br />
            <span className="text-sm text-gray-600">{profile.title}</span>
          </Typography>

          {/* Breadcrumbs Profile */}
          <Breadcrumbs className="mb-4">
            <a href="#" className="flex items-center gap-1 opacity-70">
              <Server className="w-4 h-4" /> {profile.location}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 opacity-70"
            >
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
          </Breadcrumbs>

          {/* Summary */}
          <Typography
            variant="lead"
            className="mb-6 !text-gray-700 md:pr-16 xl:pr-28"
          >
            {profile.summary}
          </Typography>

          {/* CTA Email / Contact */}
          {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Contact Me
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row"> */}
          {/* @ts-ignore */}
          {/* <Input
                color="gray"
                label="Enter your email"
                size="lg"
                defaultValue={profile.email}
              />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Send Message
              </Button>
            </div>
          </div> */}

          {/* <Typography variant="small" className="font-normal !text-gray-500">
            View my{' '}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>

        {/* Gambar Hero */}
        <Image
          width={1024}
          height={1024}
          alt="Hero Image"
          src="/image/foto.jpeg" // ganti sesuai asset portofolio atau foto profil
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
