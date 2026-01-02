'use client';

import {
  Typography as MT_Typography,
  Button as MT_Button,
} from '@material-tailwind/react';

const Typography = MT_Typography as any;
const Button = MT_Button as any;

import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';

import { ResumeItem } from '@/components';

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: 'Bachelor of Information Systems',
  },
  {
    icon: PuzzlePieceIcon,
    children: 'Certified Web Developer',
  },
  {
    icon: CursorArrowRaysIcon,
    children:
      'Technical expertise across infrastructure, development, and data.',
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>

          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            IT Engineer & IT Operations Specialist with 3+ years of experience
            in enterprise multi-site environments, combining IT infrastructure,
            network security, system development, and IT service management.
            Proven in delivering business-driven IT solutions that reduce
            downtime and improve operational efficiency.
          </Typography>

          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            View more
            <ArrowRightIcon className="h-3.5 w-3.5 text-gray-900" />
          </Button>
        </div>

        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
