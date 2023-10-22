import * as React from 'react';

export interface HeroProps {}

export default function Hero(props: HeroProps) {
  return (
    <section id="hero">
      <h1>Senior {`${'UI, UX & Frontend'}`} Developer</h1>
      <h2>
        Passionate about crafting excellent user experiences on the web and
        mobile.
      </h2>
      <img src="" alt="hero image" />
    </section>
  );
}
