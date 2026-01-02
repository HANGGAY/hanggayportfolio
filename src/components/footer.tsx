'use client';

import {
  Typography as MT_Typography,
  Button as MT_Button,
  IconButton as MT_IconButton,
} from '@material-tailwind/react';

const Typography = MT_Typography as any;
const Button = MT_Button as any;
const IconButton = MT_IconButton as any;

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  SiInstagram,
  SiGmail,
} from 'react-icons/si';
import { cv } from '../../data/cv';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { profile } = cv;

  return (
    <footer id="footer" className="mt-20 bg-gray-50 px-8 pt-16">
      <div className="container mx-auto">
        {/* CONTACT INFO */}
        <div className="mb-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <Typography variant="h6" className="mb-2">
              Contact
            </Typography>
            <div className="mb-2 flex items-center justify-center gap-3 md:justify-start">
              <PhoneIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.phone}</Typography>
            </div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <EnvelopeIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.email}</Typography>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              Location
            </Typography>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <MapPinIcon className="h-4 w-4 text-gray-700" />
              <Typography variant="small">{profile.location}</Typography>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              Connect
            </Typography>
            <div className="flex items-center justify-center gap-3 md:justify-start">
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
            © {CURRENT_YEAR} {profile.name}. All rights reserved.
          </Typography>

          <Button color="gray" size="sm">
            Hire Me
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
