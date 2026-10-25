
import './HeroTile.css';
import GameCardMedia from '../MyWork/GameCard/GameCardMedia';

import { useTranslation } from 'react-i18next';

const HeroTile = ({
  title,
  number,
  description,
  type,
  image,
  media = [],
  mediaType = 'image',
  hoverText,
  hoverMode = 'color',
  quoteOnHover = false,
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('es')
    ? 'es'
    : 'en';

  const hasMedia = ['image', 'gallery', 'video', 'gif'].includes(type);

  const tileMedia = image ? [image] : media;

  const tileMediaType =
    type === 'gallery'
      ? 'gallery'
      : type === 'video' || type === 'gif'
        ? type
        : mediaType;

  if (hasMedia) {
    return (
      <article
        className={`hero-tile hero-tile-image ${
          hoverMode === 'none' ? 'hero-tile-no-hover' : ''
        }`}
      >
        <div className="hero-tile-media">
          <GameCardMedia
            mediaType={tileMediaType}
            media={tileMedia}
          />
        </div>

        {hoverMode === 'replace' && hoverText && (
           <div className="hero-tile-hover-content">
            <h2 className={quoteOnHover ? 'hero-tile-quote' : ''}>
              {hoverText}
            </h2>
          </div>
        )}
      </article>
    );
  }

  return (
    <article
      className={`hero-tile hero-tile-${type || 'default'} ${
        quoteOnHover ? 'hero-tile-quote-on-hover' : ''
      }`}
    >
      <div className="hero-tile-content">
        {type === 'stat' && (
          <span className="hero-tile-stat-number">{number}</span>
        )}

        <div className="hero-tile-info">
          <h2>{title[currentLanguage]}</h2>

          {description && (
            <p className={quoteOnHover ? 'hero-tile-quote' : ''}>
              {description}
            </p>
          )}
        </div>
      </div>

      {hoverMode === 'replace' && hoverText && (
        <div className="hero-tile-hover-content">
          <h2>{hoverText}</h2>
        </div>
      )}
    </article>
  );
};

export default HeroTile;
