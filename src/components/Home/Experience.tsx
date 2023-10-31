import * as React from 'react';
import workExperienceJson from '../../data/work-experience.json';
import { DateTime } from 'luxon';

const workExperience = workExperienceJson.data as WorkProps[];

function formatWorkDate(dateString) {
  return DateTime.fromISO(dateString).toFormat('MMM yyyy');
}

export interface ExperienceProps {}

export default function Experience(props: ExperienceProps) {
  return (
    <section id="experience" className="flex flex-col items-center">
      <h2 className="text-lg md:text-4xl font-title mb-12 drop-shadow-titles">
        Experience
      </h2>
      {workExperience.map((work, i) => (
        <Work key={i} {...work} />
      ))}
    </section>
  );
}

type WorkProps = {
  title: string;
  company: string;
  employmentDates: {
    start: string;
    end: string | null;
  };
  type: 'freelance' | 'contract' | 'full-time' | 'self-employed';
  location: string;
  skills: Array<string>;
  description: string;
};

export const Work = (props: WorkProps) => {
  const endDate =
    props.employmentDates.end !== null
      ? formatWorkDate(props.employmentDates.end)
      : 'present';
  return (
    <article className="mb-16">
      <h4 className="text-primary">{props.title}</h4>
      <h5 className="text-accent">
        {props.company} | {props.type}
      </h5>
      <div className="text-accent">
        <time dateTime="">{formatWorkDate(props.employmentDates.start)}</time>
        &nbsp;-&nbsp;
        <time dateTime="">{endDate}</time>
      </div>
      <div className="text-accent">{props.location}</div>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>{props.description}</p>
    </article>
  );
};
