import * as React from 'react';
import ReactIcon from '../icons/React';
import NodeIcon from '../icons/Node';
import JavascriptIcon from '../icons/Javascript';
import TypeScriptIcon from '../icons/TypeScriptIcon';
import GraphQLIcon from '../icons/GraphQLIcon';

const skills = [
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
    skill: 'Responsive Design',
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
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(({ skill, icon: Icon }) => (
          <li key={skill} className="flex gap-2 items-center">
            <Icon /> {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
