import * as React from 'react';

const skills = [
  {
    skill: 'React',
    years: 8,
  },
  {
    skill: 'JavaScript',
    years: 10,
  },
  {
    skill: 'HTML & CSS',
    years: 19,
  },
  {
    skill: 'SCSS',
    years: 15,
  },
  {
    skill: 'TypeScript',
    years: 3,
  },
  {
    skill: 'GraphQL',
    years: 3,
  },
  {
    skill: 'Apollo',
    years: 2,
  },
  {
    skill: 'Redux',
    years: 1,
  },
  {
    skill: 'Photoshop',
    years: 10,
  },
  {
    skill: 'tailwindcss',
    years: 1,
  },
];

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map(({ skill, years }) => (
          <li key={skill}>
            {skill} <span>{years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
