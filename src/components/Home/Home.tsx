import * as React from 'react';

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
        <section id="hero">
          <h1>Senior {`${'UI, UX & Frontend'}`} Developer</h1>
          <h2>Passionate about crafting excellent user experiences on the web and mobile.</h2>
          <img src='' alt="hero image" />
        </section>
        <section id="who-am-i">
          <h3>Who Am I</h3>
        </section>
        <section id="skills">
          <h3>Skills</h3>
        </section>
        <section id="experience">
          <h3>Experience</h3>
        </section>
      </main>
    </>
  );
}
