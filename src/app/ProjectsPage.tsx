'use client';

import { cv } from '../../data/cv';
import {
  Card as MT_Card,
  CardHeader as MT_CardHeader,
  CardBody as MT_CardBody,
  CardFooter as MT_CardFooter,
  Typography as MT_Typography,
  Avatar as MT_Avatar,
  Tooltip as MT_Tooltip,
  Button as MT_Button,
} from '@material-tailwind/react';

const Card = MT_Card as any;
const CardHeader = MT_CardHeader as any;
const CardBody = MT_CardBody as any;
const CardFooter = MT_CardFooter as any;
const Typography = MT_Typography as any;
const Avatar = MT_Avatar as any;
const Tooltip = MT_Tooltip as any;
const Button = MT_Button as any;

export default function ProjectsPage() {
  return (
    <div id="ProjectsPage" className="container mx-auto px-4 py-10">
      <Typography variant="h2" className="mb-10 text-center">
        My Projects
      </Typography>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cv.projects.map((project, idx) => (
          <Card key={idx} className="mx-auto max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={project.img}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
            </CardHeader>

            <CardBody>
              <Typography variant="h5" color="blue-gray">
                {project.name}
              </Typography>

              <Typography
                variant="small"
                color="gray"
                className="mt-1 mb-2 block"
              >
                {project.role}
              </Typography>

              <Typography
                variant="lead"
                color="gray"
                className="mt-2 font-normal"
              >
                {project.description}
              </Typography>
            </CardBody>

            <CardFooter className="flex items-center justify-between">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="gradient">
                  See Project
                </Button>
              </a>

              {project.logos && (
                <div className="flex items-center gap-2">
                  {project.logos.map((logo, lidx) => (
                    <img
                      key={lidx}
                      src={logo.file}
                      alt={logo.name}
                      className="h-7 w-7 rounded-full border border-gray-200 bg-white object-contain"
                    />
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
