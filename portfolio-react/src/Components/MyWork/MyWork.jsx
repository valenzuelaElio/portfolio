import React, { useState } from 'react'
import './MyWork.css'

import PlatformPill from './Utils/PlatformPill.jsx';

//import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/data/mywork_data.js'
import GameCard from './GameCard/GameCard.jsx';

import { useTranslation } from 'react-i18next';

const projectAssets = import.meta.glob(
  '../../assets/projects/**/*.{svg,png,jpg,jpeg,webp,gif,mp4,webm}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

const MyWork = () => {

    // Dentro del componente:
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage?.startsWith('es')
      ? 'es'
      : 'en';

    const [visibleCount, setVisibleCount] = useState(9) // cantidad inicial de imágenes

 return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>{t('NavBar_Projects')}</h1>
      </div>

      <div className="game-card-grid">
        {mywork_data.map((project) => {
          const media = project.images
            .map((filename) => {
              const path =
                `../../assets/projects/${project.id}/${filename}`;

              return projectAssets[path];
            })
            .filter(Boolean);

          return (
            <GameCard
              key={project.id}
              title={project.title}
              releaseDate={project.releaseDate}
              description={project.description[language]}
              mediaType={project.mediaType}
              media={media}
              platforms={project.platforms}
            />
          );
        })}
      </div>

    </div>
    
  )
}

export default MyWork