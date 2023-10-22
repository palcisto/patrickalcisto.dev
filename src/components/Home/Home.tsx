import * as React from 'react';
import WhoAmI from './WhoAmI';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';

export interface HomeProps {
  prop?: string;
}

export function Home({prop = 'default value'}: HomeProps) {
  return (
    <>
      <header>
        <div>
          <img src='' alt="PA" /> 
          <span>Patrick A. Alcisto</span>
        </div>
      </header>
      <main>
        <Hero />
        <WhoAmI />
        <Skills />
        <Experience />
      </main>
    </>
  );
}
