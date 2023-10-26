import * as React from 'react';
import WhoAmI from './WhoAmI';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

export interface HomeProps {
  prop?: string;
}

export function Home({ prop = 'default value' }: HomeProps) {
  return (
    <>
      <header className="">
        <div id="branding">
          <img src="" alt="PA" />
          <span>Patrick A. Alcisto</span>
        </div>

        <div id="social">
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>G2i</li>
          </ul>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#whoami">Who am I?</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="work-status">
          <span>Available for work</span>
          {/** Display a "status" icon */}
          <a href="#">Hire me</a> {/** link to G2i or contact form */}
        </div>
      </header>
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
