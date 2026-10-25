
import './GameCard.css';
import GameCardMedia from './GameCardMedia';
import PlatformPill from '../Utils/PlatformPill.jsx'

const GameCard = ({
  mediaType = 'image',
  media = [],
  title,
  releaseDate,
  description,
  platforms = [],
}) => {
  return (
    <div className="game-card-wrapper">
      {/* Sombra fija, no se mueve */}
      <div className="game-card-shadow"></div>

      {/* Card que se eleva */}
      <article className="game-card">
        <GameCardMedia
          mediaType={mediaType}
          media={media}
        />

        <div className="game-card-content">
          <h3 className="game-card-title">{title}</h3>
          <p className="game-card-date">{releaseDate}</p>

          <p className="game-card-description">
            {description}
          </p>

          <div className="game-card-platforms">
            {platforms.map((item) => (
              <PlatformPill
                key={item.platform}
                platform={item.platform}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default GameCard;
