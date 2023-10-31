import * as React from 'react';
import ReactIcon from '../icons/React';
import NodeIcon from '../icons/Node';
import JavascriptIcon from '../icons/Javascript';
import TypeScriptIcon from '../icons/TypeScriptIcon';
import GraphQLIcon from '../icons/GraphQLIcon';
import { sortSkills } from '../../lib/utils';

export type Skill = {
  skill: string;
  years: number;
  category: 'technical' | 'soft';
  icon: React.FC;
};

const skills: Skill[] = [
  {
    skill: 'React',
    years: 8,
    category: 'technical',
    icon: ReactIcon,
  },
  {
    skill: 'JavaScript',
    years: 10,
    category: 'technical',
    icon: JavascriptIcon,
  },
  {
    skill: 'HTML & CSS',
    years: 19,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'SCSS',
    years: 15,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'TypeScript',
    years: 3,
    category: 'technical',
    icon: TypeScriptIcon,
  },
  {
    skill: 'Node.js',
    years: 2,
    category: 'technical',
    icon: NodeIcon,
  },
  {
    skill: 'GraphQL',
    years: 3,
    category: 'technical',
    icon: GraphQLIcon,
  },
  {
    skill: 'Apollo',
    years: 2,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'Redux',
    years: 1,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'Photoshop',
    years: 10,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'tailwindcss',
    years: 1,
    category: 'technical',
    icon: () => null,
  },
  {
    skill: 'UX',
    years: 12,
    category: 'soft',
    icon: () => null,
  },
  {
    skill: 'Accessibility',
    years: 12,
    category: 'soft',
    icon: () => null,
  },
  {
    skill: 'Responsive',
    years: 10,
    category: 'soft',
    icon: () => null,
  },
  {
    skill: 'GIT',
    years: 13,
    category: 'technical',
    icon: () => null,
  },
];

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
  return (
    <section id="skills" className="flex flex-col items-center mb-48">
      <h2 className="text-lg md:text-4xl font-title mb-12 drop-shadow-titles">
        Tools
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 w-1/2 rounded-tr-2xl rounded-bl-2xl p-8 border border-accent text-eerie-black shadow-current shadow-inner">
        {skills.sort(sortSkills).map(({ skill, icon: Icon }) => (
          <li
            key={skill}
            className="flex gap-2 items-center rounded-md bg-eerie-black py-2 px-3 text-accent"
          >
            <Icon /> {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
