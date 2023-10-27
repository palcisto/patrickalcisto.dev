import * as React from 'react';
import Header from '../Header';
import WhoAmI from './WhoAmI';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoAmI />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
