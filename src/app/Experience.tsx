'use client';

import { motion } from 'framer-motion';
import { cv } from '../../data/cv';

export default function Experience() {
  return (
    <section id="experience" className=" bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Timeline */}
        <div className="relative border-l border-white/10">
          {cv.experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-10 pb-14 last:pb-0"
            >
              {/* Dot */}
              <span className="absolute left-[-7px] top-2 w-3.5 h-3.5 rounded-full bg-gray-400" />

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                  </div>

                  <div className="text-sm text-slate-400">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 list-disc list-inside text-slate-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
