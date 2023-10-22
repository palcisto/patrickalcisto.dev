import * as React from 'react';

const experience = [
  {
    title: 'Founder/Owner, Lead Instructor',
    company: 'Ride Skills',
    employmentDates: {
      start: new Date('October, 2023'),
      end: null,
    },
    type: 'self-employed',
    location: 'Charlotte, NC',
    skills: ['TypeScript', 'React', 'Next.js'],
    description: `I have decided to take on the challenge of starting and running my own mountain bike instruction and coaching company. This allows me to share my love of mountain biking with others and while helping people gain the skills to ride safely and confidently! 

  This venture is giving me the chance to combine two of my passions, mountain biking & web development. Mountain biking has always been my top hobby for 19 years from riding for fun to competing at the international level. Now as an instructor I get to pass on my passion for the sport & help others reach their goals in riding. I also get a chance to capitalize on my 19 years of experience in web design and software development to build out and maintain my company website. I created the logo and branding that will represent the Ride Skill mission and beliefs for years to come.

  Responsibilities:
  - skills coach and instructor
  - business administration
  - logo and branding design
  - website design
  - website development and maintenance
  `,
  },
] as WorkProps[];

export interface ExperienceProps {}

export default function Experience(props: ExperienceProps) {
  return (
    <section id="experience">
      <h3>Experience</h3>
      {experience.map((work, i) => (
        <Work key={i} {...work} />
      ))}
    </section>
  );
}

type WorkProps = {
  title: string;
  company: string;
  employmentDates: {
    start: Date;
    end: Date | null;
  };
  type: 'freelance' | 'contract' | 'full-time' | 'self-employed';
  location: string;
  skills: Array<string>;
  description: string;
};

export const Work = (props: WorkProps) => {
  const endDate =
    props.employmentDates.end !== null
      ? props.employmentDates.end.toISOString()
      : 'present';
  return (
    <article>
      <h4>{props.title}</h4>
      <h5>
        {props.company} | {props.type}
      </h5>
      <div>
        {/* Need to format dates as Month YYYY */}
        <time dateTime="">{props.employmentDates.start.toISOString()}</time>
        &nbsp;-&nbsp;
        <time dateTime="">{endDate}</time>
      </div>
      <div>{props.location}</div>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>{props.description}</p>
    </article>
  );
};
