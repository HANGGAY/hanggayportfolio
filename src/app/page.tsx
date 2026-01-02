// components
import { Navbar, Footer } from '@/components';

// sections
import Hero from './hero';
import Clients from './clients';
import Skills from './skills';

import Resume from './resume';

import PopularClients from './popular-clients';

import Experience from './Experience';
import ProjectsPage from './ProjectsPage';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />

      <Clients />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <ProjectsPage />
      <Resume />

      <PopularClients />

      <Footer />
    </>
  );
}
