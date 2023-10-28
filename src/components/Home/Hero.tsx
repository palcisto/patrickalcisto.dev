import * as React from 'react';

const developerTypes = ['Frontend', 'UI', 'UX'];

/**
 * TODO: alternate the developer type every 3 seconds
 */

export interface HeroProps {}

export default function Hero(props: HeroProps) {
  return (
    <section id="hero">
      <div>
        <h1 className="text-center md:text-left">
          Senior <span>Frontend</span> Developer
        </h1>
        <h2>
          Passionate about crafting excellent user experiences on the web and
          mobile
        </h2>
        <a href="#" className="cta uppercase tracking-wide font-normal">
          <span className="cta__inner">Hire me</span>
        </a>
      </div>
      <img className="hero__image" src="" alt="hero image" />
    </section>
  );
}
