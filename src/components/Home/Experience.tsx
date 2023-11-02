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
    <section id="experience" className="grid grid-cols-2 gap-12">
      <h2 className="text-lg md:text-4xl font-title mb-12 drop-shadow-titles">
        Experience
      </h2>
      {workExperience.map((work, i) => (
        <Work key={i} {...work} />
      ))}
    </section>
  );
}

type PillProps = {
  children: React.ReactNode;
};

const Pill = (props: PillProps) => (
  <span className="p-2 text-sm rounded-md bg-eerie-black text-primary">
    {props.children}
  </span>
);

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
    <article className="mb-16 work p-8 rounded-tr-xl rounded-bl-xl border border-accent border-solid">
      <h4 className="text-2xl text-primary mb-4">{props.title}</h4>
      <h5 className="text-accent">
        {props.company} | {props.type}
      </h5>
      <div className="text-accent">
        <time dateTime="">{formatWorkDate(props.employmentDates.start)}</time>
        &nbsp;-&nbsp;
        <time dateTime="">{endDate}</time>
      </div>
      <div className="text-accent">{props.location}</div>
      <p className="m-0 mb-8 p-0">{props.description}</p>
      <ul className="flex gap-2">
        {props.skills.map((skill) => (
          <li key={skill}>
            <Pill>{skill}</Pill>
          </li>
        ))}
      </ul>
    </article>
  );
};
