
import './About.css';
import {
  FaGithub,
  FaLinkedin,
  FaItchIo,
  FaEnvelope,
  FaGlobe,
  FaGamepad,
  FaYoutube
} from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/valenzuelaElio',
  },
  {
    name: 'itch.io',
    icon: FaItchIo,
    url: 'https://gd3l10.itch.io/',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/valenzuelaelio/',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:valenzuela.eliogd@gmail.com',
  },
  {
    name: 'Portfolio',
    icon: FaGlobe,
    url: 'https://tu-dominio.com',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/@_3L10',
  }
];

const about_data = {
  "intro" : {
    'es' : 'Hola, Soy Desarrollador de Videojuegos',
    'en' : "Hi, I'm a Game Developer"
  },
  "content" : {
    'es' : 'Soy programador y desarrollador de videojuegos, apasionado por la creación de experiencias interactivas, sistemas de juego y herramientas.',
    'en' : "I'm a programmer and game developer passionate about creating interactive experiences, gameplay systems and tools."
  },
  "end" : {
    'es' : 'Trabajo con Unity y Unreal Engine, combinando el desarrollo técnico con la resolución creativa de problemas.',
    'en' : "I work with Unity and Unreal Engine, combining technical development with creative problem-solving."
  }
}

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('es')
    ? 'es'
    : 'en';

  return (
    <section className="about" id="about">
      <div className="about-title">
        <h1>{t('NavBar_About')}</h1>
      </div>

      <div className="about-grid">
        {/* Presentación principal */}
        <div className="about-tile-wrapper about-intro-wrapper">
          <div className="about-tile-shadow" />

          <article className="about-tile about-intro">
            <FaGamepad className="about-intro-icon" />

            <h2>{about_data.intro[currentLanguage]}</h2>

            <p>{about_data.content[currentLanguage]}</p>

            <p>{about_data.end[currentLanguage]}</p>
          </article>
        </div>

        {/* Redes sociales */}
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <div
              className="about-tile-wrapper"
              key={social.name}
            >
              <div className="about-tile-shadow" />

              <a
                className="about-tile about-social-tile"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon className="about-social-icon" />
                <span>{social.name}</span>
              </a>
            </div>
          );
        })}

        {/* Tile adicional de especialidad */}
        <div className="about-tile-wrapper about-focus-wrapper">
          <div className="about-tile-shadow" />

          <article className="about-tile about-focus">
            <span className="about-focus-label">FOCUS</span>
            <h3>Gameplay</h3>
            <h3>Systems</h3>
            <h3>Tools</h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
