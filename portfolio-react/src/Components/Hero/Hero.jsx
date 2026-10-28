
import React from 'react';
import './Hero.css';

import HeroTile from '../../Components/HeroTile/HeroTile';
import profile from '../../assets/personal/profile.svg';
import logo from '../../assets/personal/logo_dark.svg';

const tiles = [
  { 
    id: 8, title: {
      'es' : "Game developer",
      'en' : "Game developer"
    }, 
    size: 'tile-1x1', hoverMode: 'color'
  },
  { 
    id: 2, size: 'tile-1x1', title: {
      'es' : "Elio Valenzuela",
      'en' : "Elio Valenzuela"
    }, 
  },
  {
    id: 3, size: 'tile-1x1', hoverMode: 'none', type: 'gallery', media : ['../../assets/projects/tormented-souls-2/ts2_video.gif'], hoverText: 'Ver mas'
  },
  { 
    id: 4, title: '', size: 'tile-2x1', 
    
    display: 'cover',
    hoverMode: 'none',
  },
  {
    id: 5, type: 'image', image: profile, size: 'tile-2x2', hoverMode : "replace", hoverText : '"La vida es muy corta para no hacer lo que amas"', quoteOnHover: true,
  },
  { 
    id: 6, title: 'Habilidades', size: 'tile-2x1', 
    type: 'gallery',
    media: [
      '../../assets/projects/tormented-souls-2/ts2_thumbnail.webp',
      '../../assets/projects/id-machina/id-machina-1.jpg',
      '../../assets/projects/daybreak-slam/dbs-cover.jpg'
    ],
    display: 'cover',
    hoverMode: 'none',
  },
  {
    id: 7,
    type: 'stat',
    number: '8+',
    title: {
      'es' : "años de experiencia",
      'en' : "years of experience"
    },
    size: 'tile-1x1',
    
  },
  {
    id: 1, size: 'tile-1x1',
    type: 'stat',
    number: '⬇',
    title: {
      'es' : 'Ver mas',
      'en' : 'See more'
    }, hoverMode: 'none', hoverText: 'Ver mas ⬇'
  },
  { 
    id: 9, size: 'tile-2x1', type: 'stat',
    number: '5+',
    title: {
      'es' : "años en la industria chilena",
      'en' : "years in the chilean industry"
    },
    hoverMode: 'none',
    hoverText: 'Videojuegos\nApps\nDiseño\nEducacion'
  },
];

const Hero = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-grid-container">
        <div className="home-grid">
          {tiles.map((tile) => (
              <div key={tile.id} className={`home-tile ${tile.size}`}>
                <HeroTile {...tile} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
