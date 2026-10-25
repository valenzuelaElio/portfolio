
import './SkillCard.css';

const SkillCard = ({ name, icon: Icon }) => {
  return (
    <div className="skill-card-wrapper">
      <div className="skill-card-shadow" />

      <article className="skill-card">
        <Icon className="skill-card-icon" aria-hidden="true" />
        <span className="skill-card-name">{name}</span>
      </article>
    </div>
  );
};

export default SkillCard;
