import * as React from 'react';

export interface WhoAmIProps {
  profilePhoto: string;
}

export default function WhoAmI(props: WhoAmIProps) {
  return (
    <section
      id="who-am-i"
      className="flex flex-col md:flex-row gap-24 mb-48 px-8 md:px-56"
    >
      <div className="text-center md:text-right">
        <h2 className="text-3xl md:text-4xl font-title mb-12 drop-shadow-titles">
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
      {props.profilePhoto}
    </section>
  );
}
