'use client';

import { Typography } from '@material-tailwind/react';
import ProjectCard from '../components/project-card';
import { cv } from '../../data/cv';

export default function Projects() {
  // Ambil data dari cv.projects
  const PROJECTS = cv.projects.map((project) => ({
    img: project.img || '/images/default-project.svg',
    title: project.name,
    desc: project.description,
    role: project.role,
    link: project.link || '#',
  }));

  return (
    <section className="py-28 px-8">
      {/* Header */}
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>

      {/* Project cards */}
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
