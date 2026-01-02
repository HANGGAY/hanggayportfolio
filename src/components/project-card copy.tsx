'use client';

import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

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
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
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
          <Typography variant="small" className="text-gray-500 mb-2 block">
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
