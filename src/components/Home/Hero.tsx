import * as React from 'react';

const developerTypes = ['Frontend', 'UI', 'UX'];

/**
 * TODO: alternate the developer type every 3 seconds
 */

export interface HeroProps {
  children: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section id="hero" className="min-h-screen">
      {props.children}
      <h1 className="text-center md:text-left">
        Senior <span>Frontend</span> Developer
      </h1>
      <h2>
        Passionate about crafting excellent user experiences on the web and
        mobile
      </h2>
      <a
        href="https://portal.g2i.co/developer/Patrick-Alcisto/22c9f395-29f8-4820-b737-1e83dfce07a0"
        className="cta uppercase tracking-wide font-normal"
      >
        <span className="cta__inner">Hire me</span>
      </a>
      <img className="hero__image" src="" alt="hero image" />
    </section>
  );
}
