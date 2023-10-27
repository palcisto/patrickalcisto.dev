import * as React from 'react';

const skills = [
  {
    skill: 'React',
    years: 8,
    category: 'technical',
  },
  {
    skill: 'JavaScript',
    years: 10,
    category: 'technical',
  },
  {
    skill: 'HTML & CSS',
    years: 19,
    category: 'technical',
  },
  {
    skill: 'SCSS',
    years: 15,
    category: 'technical',
  },
  {
    skill: 'TypeScript',
    years: 3,
    category: 'technical',
  },
  {
    skill: 'GraphQL',
    years: 3,
    category: 'technical',
  },
  {
    skill: 'Apollo',
    years: 2,
    category: 'technical',
  },
  {
    skill: 'Redux',
    years: 1,
    category: 'technical',
  },
  {
    skill: 'Photoshop',
    years: 10,
    category: 'technical',
  },
  {
    skill: 'tailwindcss',
    years: 1,
    category: 'technical',
  },
  {
    skill: 'UX',
    years: 12,
    category: 'soft',
  },
  {
    skill: 'Accessibility',
    years: 12,
    category: 'soft',
  },
  {
    skill: 'Responsive Design',
    years: 10,
    category: 'soft',
  },
  {
    skill: 'GIT',
    years: 13,
    category: 'technical',
  },
];

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
  return (
    <section id="skills">
      <h2>Skills</h2>
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
