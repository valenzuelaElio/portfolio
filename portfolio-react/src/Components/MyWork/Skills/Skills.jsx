
import './Skills.css';
import skillsData from '../../../assets/data/skills_data.js';
import SkillCard from './SkillCard';

import { useTranslation } from 'react-i18next';

const Skills = () => {
    // Dentro del componente:
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage?.startsWith('es')
      ? 'es'
      : 'en';

  return (
    <section className="skills" id="skills">
      <div className="skills-title">
        <h1>{t('NavBar_Skills')}</h1>
      </div>

      {skillsData.map((category) => (
        <div className="skills-category" key={category.title}>
          <h2>{category.title[language]}</h2>

          <div className="skills-grid">
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
