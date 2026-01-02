'use client';

import { Typography, Button, IconButton } from '@material-tailwind/react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  SiInstagram,
  SiGmail,
} from 'react-icons/si';
import { cv } from '../../data/cv';

const LINKS = ['Home', 'Projects', 'Resume', 'Contact'];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { profile } = cv;

  return (
    <footer id="footer" className="mt-20 px-8 pt-16 bg-gray-50">
      <div className="container mx-auto">
        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div>
            <Typography variant="h6" className="mb-2">
              Contact
            </Typography>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <PhoneIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.phone}</Typography>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <EnvelopeIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.email}</Typography>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              Location
            </Typography>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPinIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.location}</Typography>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              Connect
            </Typography>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <IconButton
                variant="text"
                onClick={() => window.open(profile.github, '_blank')}
              >
                <SiGithub className="text-xl text-gray-700 hover:text-black transition" />
              </IconButton>

              <IconButton
                variant="text"
                onClick={() => window.open(profile.linkedin, '_blank')}
              >
                <SiLinkedin className="text-xl text-gray-700 hover:text-[#0A66C2] transition" />
              </IconButton>

              <IconButton
                variant="text"
                onClick={() => window.open(profile.whatsapp, '_blank')}
              >
                <SiWhatsapp className="text-xl text-gray-700 hover:text-[#25D366] transition" />
              </IconButton>

              <IconButton
                variant="text"
                onClick={() => window.open(profile.instagram, '_blank')}
              >
                <SiInstagram className="text-xl text-gray-700 hover:text-[#E4405F] transition" />
              </IconButton>

              <IconButton
                variant="text"
                onClick={() => window.open(`mailto:${profile.email}`)}
              >
                <SiGmail className="text-xl text-gray-700 hover:text-[#EA4335] transition" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} {profile.name}. All rights reserved.
          </Typography>

          <ul className="flex gap-8 items-center">
            <Button color="gray" size="sm">
              Hire Me
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
