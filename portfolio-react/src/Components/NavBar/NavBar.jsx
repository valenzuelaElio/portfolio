
import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';

import icon_home from '../../assets/icons/NavBar/Icon_Home.svg';
import icon_projects from '../../assets/icons/NavBar/Icon_Projects.svg';
import icon_skills from '../../assets/icons/NavBar/Icon_Skills.svg';
import icon_xp from '../../assets/icons/NavBar/Icon_XP.svg';
import icon_contact from '../../assets/icons/NavBar/Icon_Contact.svg';
import icon_about from '../../assets/icons/NavBar/Icon_About.svg';

import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('es')
    ? 'es'
    : 'en';

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('portfolio-language', language);
  };

  const [activeSection, setActiveSection] = useState('home');
  const [isCompact, setIsCompact] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const links = [
  { id: 'home', label: t('NavBar_Home'), icon: icon_home },
  { id: 'projects', label: t('NavBar_Projects'), icon: icon_projects },
  { id: 'skills', label: t('NavBar_Skills'), icon: icon_skills },
  { id: 'experience', label: t('NavBar_Experience'), icon: icon_xp },
  { id: 'about', label: t('NavBar_About'), icon: icon_about },
  { id: 'contact', label: t('NavBar_ContactMe'), icon: icon_contact },
];

  useEffect(() => {
    const updateNavigation = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      // Compactar al bajar y expandir al subir.
      if (currentScrollY < 10) {
        setIsCompact(false);
      } else if (currentScrollY > previousScrollY + 5) {
        setIsCompact(true);
      } else if (currentScrollY < previousScrollY - 5) {
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;

      // Determinar qué sección está en la zona visible.
      const activationPoint = window.innerHeight * 0.35;
      let currentSection = links[0].id;

      for (const link of links) {
        const section = document.getElementById(link.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationPoint) {
          currentSection = link.id;
        } else {
          break;
        }
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavigation);
        ticking.current = true;
      }
    };

    // Actualizar también al cargar la página.
    updateNavigation();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar-vertical ${
        isCompact ? 'navbar-compact' : ''
      }`}
    >
      <div className="navbar-language-switcher" aria-label="Language">
        <button
          type="button"
          className={currentLanguage === 'es' ? 'active' : ''}
          onClick={() => changeLanguage('es')}
          aria-pressed={currentLanguage === 'es'}
          aria-label="Cambiar a español"
        >
          ES
        </button>

        <button
          type="button"
          className={currentLanguage === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
          aria-pressed={currentLanguage === 'en'}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={
                activeSection === link.id ? 'active' : ''
              }
              aria-current={
                activeSection === link.id ? 'location' : undefined
              }
              onClick={() => setActiveSection(link.id)}
            >
              <img
                src={link.icon}
                alt=""
                className="navbar-icon"
              />
              <span className="navbar-label">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
