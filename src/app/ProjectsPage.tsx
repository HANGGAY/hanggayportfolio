'use client';

import { cv } from '../../data/cv';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

export default function ProjectsPage() {
  return (
    <div id="ProjectsPage" className="container mx-auto px-4 py-10">
      <Typography variant="h2" className="text-center mb-10">
        My Projects
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cv.projects.map((project, idx) => (
          <Card key={idx} className="max-w-[24rem] overflow-hidden mx-auto">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={project.img}
                alt={project.name}
                className="object-cover w-full h-48"
              />
            </CardHeader>

            <CardBody>
              <Typography variant="h5" color="blue-gray">
                {project.name}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="block mt-1 mb-2"
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

              {/* {project.features && (
                <ul className="list-disc list-inside mt-3 text-gray-600 text-sm">
                  {project.features.map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
              )} */}

              {/* {project.impact && (
                <ul className="list-disc list-inside mt-3 text-gray-600 text-sm">
                  {project.impact.map((imp, iidx) => (
                    <li key={iidx}>{imp}</li>
                  ))}
                </ul>
              )} */}
            </CardBody>

            <CardFooter className="flex items-center justify-between">
              <a
                href={project.link}
                className="text-gray-500 hover:underline font-medium"
              >
                <Button href={project.link} size="sm" variant="gradient">
                  See Project
                </Button>
              </a>
              <div className="flex items-center space-x-2">
                {project.logos && (
                  <div className="flex items-center gap-2">
                    {project.logos.map((logo, lidx) => (
                      <img
                        key={lidx}
                        src={logo.file}
                        alt={logo.name}
                        className="w-7 h-7 object-contain rounded-full border border-gray-200 bg-white"
                      />
                    ))}
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
