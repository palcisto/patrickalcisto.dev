import * as React from 'react';
import workExperienceJson from '../../data/work-experience.json';
import { DateTime } from 'luxon';
import lobbyCreLogo from '@/images/lobby-cre-logo.png';
import homeschoolBossLogo from '@/images/homeschool-boss-logo.png';
import crowdstrikeLogo from '@/images/crowdstrike-logo.png';
import paymyntLogo from '@/images/paymynt-logo.png';
import tablereadLogo from '@/images/tableread-logo.png';

type CompanyNames =
  | 'lobby cre'
  | 'homeschool boss'
  | 'crowdStrike'
  | 'paymynt'
  | 'tableread';
const companyLogos = {
  'lobby cre': { ...lobbyCreLogo },
  'homeschool boss': { ...homeschoolBossLogo },
  crowdstrike: { ...crowdstrikeLogo },
  paymynt: { ...paymyntLogo },
  tableread: { ...tablereadLogo },
};

const workExperience = workExperienceJson.data.filter(
  (w) => w.isPreferred
) as WorkProps[];

function formatWorkDate(dateString) {
  return DateTime.fromISO(dateString).toFormat('MMM yyyy');
}

export interface ExperienceProps {}

export default function Experience(props: ExperienceProps) {
  return (
    <section id="experience">
      <h2 className="text-lg text-center md:text-4xl mb-12 drop-shadow-titles">
        Work
      </h2>
      <div className="grid grid-cols-2 3xl:grid-cols-3 gap-16 max-w">
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
  isPreferred: boolean;
};

export const Work = (props: WorkProps) => {
  const endDate =
    props.employmentDates.end !== null
      ? formatWorkDate(props.employmentDates.end)
      : 'present';
  const company = props.company.toLowerCase() as CompanyNames;
  const logo = companyLogos[company];
  const { src, height, width } = logo;
  console.log({ logo });

  return (
    <article className="work p-12 rounded-xl border-0 border-accent border-solid">
      <picture className="work__branding">
        <img
          className="work__logo mb-8"
          src={src}
          height={height}
          width={width}
          alt={company}
        />
      </picture>
      <h4 className="text-3xl text-primary mb-4">{props.title}</h4>
      <h5 className="text-accent mb-2">{props.company}</h5>
      <div className="text-gray-200 mb-2 hidden">
        <time dateTime="">{formatWorkDate(props.employmentDates.start)}</time>
        &nbsp;-&nbsp;
        <time dateTime="">{endDate}</time>
      </div>
      <div className="text-gray-500 mb-2 hidden">{props.location}</div>
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
