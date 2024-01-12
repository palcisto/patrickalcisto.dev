import * as React from 'react';

export interface WhoAmIProps {}

export default function WhoAmI(props: WhoAmIProps) {
  return (
    <section id="who-am-i" className="flex flex-col gap-24 mb-48 px-8 md:px-56">
      <div className="text-center md:text-right">
        <h2 className="text-3xl md:text-4xl mb-12 drop-shadow-titles">
          Who Am I?
        </h2>
        <p className="text-lg font-light">
          Experienced UI developer with rare attention to detail and focus who
          prides himself on creating optimized, standards- compliant web
          applications across frameworks. Self-motivated, communicative, and
          capable of working independently or in large teams effectively and to
          deadlines. Deep foundation of core web principles and constantly
          hungry to learn new technologies. Most happy when producing beautiful
          React components with Styled Components but just as at home with other
          frameworks or dropping down to raw HTML, CSS, and JavaScript whenever
          needed.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl mb-12 drop-shadow-titles">
          What Do I Do?
        </h2>
        <p className="text-lg font-light">
          I am a UI developer with a focus on React. I have experience with
          other frameworks and languages but React is my jam. I love creating
          beautiful, responsive, and accessible components that are easy to use
          and maintain. I am also a big fan of Styled Components and use them
          whenever possible.
        </p>
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl mb-12 drop-shadow-titles">
          Things I'm experimenting with
        </h3>
        <ul>
          <li>Astro</li>
          <li>Netlify</li>
          <li>Responsive Design with Tailwindcss</li>
          <li>Design</li>
        </ul>
      </div>
    </section>
  );
}
