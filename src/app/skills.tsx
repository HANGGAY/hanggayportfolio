'use client';

import { motion } from 'framer-motion';
import { cv } from '../../data/cv';
import { Server, Network, Code, Database, Wrench } from 'lucide-react';
import { JSX } from 'react';
import {
  Typography as MT_Typography,
  Button as MT_Button,
} from '@material-tailwind/react';

const Typography = MT_Typography as any;
const Button = MT_Button as any;
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiCodeigniter,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiTableau,
  SiGithub,
  SiDocker,
  SiLinux,
  SiJupyter,
  SiN8N,
  SiTensorflow,
  SiOpenai,
} from 'react-icons/si';

/* =======================
   TECH ICON MAP
======================= */
const techIconMap: Record<string, JSX.Element> = {
  Node: <SiNodedotjs size={24} />,
  Express: <SiExpress size={24} />,
  Nest: <SiNestjs size={24} />,
  Laravel: <SiLaravel size={24} />,
  CodeIgniter: <SiCodeigniter size={24} />,
  React: <SiReact size={24} />,
  Next: <SiNextdotjs size={24} />,
  Python: <SiPython size={24} />,
  SQL: <SiMysql size={24} />,
  Database: <SiMysql size={24} />,
  Tableau: <SiTableau size={24} />,
  Git: <SiGithub size={24} />,
  Docker: <SiDocker size={24} />,
  Linux: <SiLinux size={24} />,
  Jupyter: <SiJupyter size={24} />,
  n8n: <SiN8N size={24} />,
  Tensor: <SiTensorflow size={24} />,
  Flowise: <SiOpenai size={24} />,
};

/* =======================
   CATEGORY ICONS
======================= */
const categoryIcons: Record<string, JSX.Element[]> = {
  'IT Infrastructure & Operations': [
    <Server key="server" size={20} />,
    <Network key="network" size={20} />,
  ],
  'Software & System Development': [<Code key="code" size={20} />],
  'Data & Analytics': [<Database key="database" size={20} />],
  'Tools & Platforms': [<Wrench key="wrench" size={20} />],
};

/* =======================
   GET TECH ICONS
======================= */
function getTechIcons(items: string[]) {
  const icons = new Map<string, JSX.Element>();
  items.forEach((item) => {
    Object.entries(techIconMap).forEach(([key, icon]) => {
      if (item.toLowerCase().includes(key.toLowerCase())) {
        icons.set(key, icon);
      }
    });
  });
  return Array.from(icons.values());
}

/* =======================
   SKILLS COMPONENT
======================= */
export default function Skills() {
  return (
    <section id="skills" className="py-24 relative ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="container mx-auto mb-20 text-center">
          <Typography className="mb-2 font-bold uppercase">
            my skills
          </Typography>
          <Typography variant="h1" className="mb-4">
            What I do
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12"
          >
            Technical expertise across infrastructure, development, and data.
          </Typography>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cv.skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:shadow-lg transition"
            >
              {/* Category */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.category}
                </h3>
                <div className="flex gap-2 text-gray-400 opacity-70">
                  {categoryIcons[skill.category]}
                </div>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-3 mb-6">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm text-slate-200
                               border border-white/10 bg-slate-900/60
                               hover:border-gray-400/40 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-3 text-gray-400 opacity-90">
                {getTechIcons(skill.items).map((icon, i) => (
                  <span
                    key={i}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/10
                               hover:border-gray-400/50 hover:scale-105 transition"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
