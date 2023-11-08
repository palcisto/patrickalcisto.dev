import * as React from 'react';
import Header from '../Header';
import WhoAmI from './WhoAmI';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

export interface HomeProps {
  profilePhoto: string;
}

export function Home(props: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <Hero profilePhoto={props.profilePhoto} />
        <WhoAmI />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
