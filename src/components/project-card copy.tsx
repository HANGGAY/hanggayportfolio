'use client';

import Image from 'next/image';
import {
  Card as MT_Card,
  CardHeader as MT_CardHeader,
  CardBody as MT_CardBody,
  Typography as MT_Typography,
  Button as MT_Button,
} from '@material-tailwind/react';

const Card = MT_Card as any;
const CardHeader = MT_CardHeader as any;
const CardBody = MT_CardBody as any;
const Typography = MT_Typography as any;
const Button = MT_Button as any;

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  role?: string;
  link?: string;
}

export default function ProjectCard({
  img,
  title,
  desc,
  role,
  link,
}: ProjectCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="transition-shadow duration-300 hover:shadow-lg"
    >
      <CardHeader floated={false} className="mx-0 mb-6 mt-0 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody className="p-0">
        <a
          href={link || '#'}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-1">
            {title}
          </Typography>
        </a>

        {role && (
          <Typography variant="small" className="mb-2 block text-gray-500">
            {role}
          </Typography>
        )}

        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>

        {link && (
          <Button
            color="gray"
            size="sm"
            onClick={() => window.open(link, '_blank')}
          >
            See details
          </Button>
        )}
      </CardBody>
    </Card>
  );
}
