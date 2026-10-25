
import './Experience.css';
import experienceData from '../../../assets/data/myexperience_data.js';
import ExperienceCard from './ExperienceCard';

import { useTranslation } from 'react-i18next';

const Experience = () => {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('es')
    ? 'es'
    : 'en';

  return (
    <section className="experience" id="experience">
      <div className="experience-title">
        <h1>{t('NavBar_Experience')}</h1>
      </div>

      <div className="experience-grid">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
