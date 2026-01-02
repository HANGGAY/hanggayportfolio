'use client';

import React from 'react';
import { Collapse } from '@material-tailwind/react';

import {
  Navbar as MTNavbar,
  Typography as MT_Typography,
  Button as MT_Button,
  IconButton as MT_IconButton,
} from '@material-tailwind/react';

const Navbar = MTNavbar as any;
const IconButton = MT_IconButton as any;

const Typography = MT_Typography as any;
const Button = MT_Button as any;
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { cv } from '../../data/cv';
import { Home, Code, Server, Database, Wrench, FileText } from 'lucide-react';

// Menu portofolio
const NAV_MENU = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Experience', icon: Server, href: '#experience' },
  { name: 'Projects', icon: Database, href: '#ProjectsPage' },
  { name: 'Education', icon: FileText, href: '#education' },

  { name: 'Contact', icon: Wrench, href: '#footer' },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || '#'}
        target={href?.startsWith('http') ? '_blank' : '_self'}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-indigo-600 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbarsite() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Branding */}
        <Typography color="blue-gray" className="text-lg font-bold">
          {cv.profile.name}
        </Typography>

        {/* Desktop Menu */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" /> {name}.
            </NavItem>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <a href={cv.profile.linkedin} target="_blank">
            <Button color="indigo">LinkedIn</Button>
          </a>
          <a href={cv.profile.github} target="_blank">
            <Button color="gray">GitHub</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" /> {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-2">
            <a href={cv.profile.linkedin} target="_blank">
              <Button color="indigo" fullWidth>
                LinkedIn
              </Button>
            </a>
            <a href={cv.profile.github} target="_blank">
              <Button color="gray" fullWidth>
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Navbar;
