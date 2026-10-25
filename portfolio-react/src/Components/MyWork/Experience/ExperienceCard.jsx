
import './ExperienceCard.css';
import ExperienceTag from './ExperienceTag';

import { useTranslation } from 'react-i18next';
import { FaBuilding } from 'react-icons/fa';

const ExperienceCard = ({
  company,
  role,
  period,
  logo,
  icon: Icon = FaBuilding,
  description,
  tags = [],
}) => {
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage?.startsWith('es')
    ? 'es'
    : 'en';

  const companyName =
    typeof company === 'string'
      ? company
      : company[language];

  return (
    <div className="experience-card-wrapper">
      <div className="experience-card-shadow" />

      <article className="experience-card">
        <header className="experience-card-header">
          <div className="experience-card-company-icon">
            {logo ? (
              <img
                src={logo}
                alt={`Logo de ${companyName}`}
              />
            ) : (
              <Icon aria-hidden="true" />
            )}
          </div>

          <h3 className="experience-card-company">
            {companyName}
          </h3>
        </header>

        <div className="experience-card-content">
          <h4 className="experience-card-role">
            {role[language]}
          </h4>

          <p className="experience-card-period">
            {period}
          </p>

          <p className="experience-card-description">
            {description[language]}
          </p>

          <div className="experience-card-tags">
            {tags.map((tag, index) => (
              <ExperienceTag key={`${tag}-${index}`}>
                {tag}
              </ExperienceTag>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
