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
    <section id="experience">
      <h2 className="text-lg md:text-4xl font-title mb-12 drop-shadow-titles">
        Experience
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {workExperience.map((work, i) => (
          <Work key={i} {...work} />
        ))}
      </div>
    </section>
  );
}

type PillProps = {
  children: React.ReactNode;
};

const Pill = (props: PillProps) => (
  <span className="p-2 text-sm rounded-md bg-eerie-black text-primary whitespace-nowrap">
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
    <article className="mb-16 work p-8 rounded-tr-xl rounded-bl-xl border-0 border-accent border-solid">
      <h4 className="text-2xl text-primary mb-4">{props.title}</h4>
      <h5 className="text-accent mb-2">
        {props.company} | {props.type}
      </h5>
      <div className="text-gray-200 mb-2">
        <time dateTime="">{formatWorkDate(props.employmentDates.start)}</time>
        &nbsp;-&nbsp;
        <time dateTime="">{endDate}</time>
      </div>
      <div className="text-gray-500 mb-2">{props.location}</div>
      <p className="font-light m-0 mb-12 p-0 tracking-wide">
        {props.description}
      </p>
      <ul className="flex gap-4 flex-wrap">
        {props.skills.map((skill) => (
          <li className="block" key={skill}>
            <Pill>{skill}</Pill>
          </li>
        ))}
      </ul>
    </article>
  );
};
