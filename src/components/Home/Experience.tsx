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
      <h3>Experience</h3>
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
    <article>
      <h4>{props.title}</h4>
      <h5>
        {props.company} | {props.type}
      </h5>
      <div>
        <time dateTime="">{formatWorkDate(props.employmentDates.start)}</time>
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