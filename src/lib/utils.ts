import { Skill } from '../components/Home/Skills';

export const sortSkills = (a: Skill, b: Skill) => {
  if (a.years > b.years) {
    return -1;
  } else if (a.years < b.years) {
    return 1;
  }
  return 0;
};
