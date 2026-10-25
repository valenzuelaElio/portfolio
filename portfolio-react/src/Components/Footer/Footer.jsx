
import React from 'react';
import './Footer.css';

import { useTranslation } from 'react-i18next';
import {
  FaGithub,
  FaLinkedin,
  FaItchIo,
  FaArrowUp,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/valenzuelaElio',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/valenzuelaelio/',
  },
  {
    name: 'itch.io',
    icon: FaItchIo,
    url: 'https://gd3l10.itch.io/',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Marca */}
        <div className="footer-card-wrapper footer-brand-wrapper">
          <div className="footer-card-shadow" />

          <div className="footer-card footer-brand">
            <a className="footer-logo" href="#home">
              EV<span>.</span>
            </a>

            <h2>Elio Valenzuela</h2>

            <p>{t('footer_resume')}</p>

            <span className="footer-role">
              GAME DEVELOPER · PROGRAMMER
            </span>
          </div>
        </div>

        {/* Navegación */}
        <div className="footer-card-wrapper">
          <div className="footer-card-shadow" />

          <nav className="footer-card footer-navigation">
            <h3>{t("footer_nav")}</h3>

            <a href="#home">{t("NavBar_Home")}</a>
            <a href="#mywork">{t("NavBar_Projects")}</a>
            <a href="#skills">{t("NavBar_Skills")}</a>
            <a href="#experience">{t("NavBar_Experience")}</a>
            <a href="#about">{t("NavBar_About")}</a>
            <a href="#contact">{t("NavBar_ContactMe")}</a>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="footer-card-wrapper">
          <div className="footer-card-shadow" />

          <div className="footer-card footer-socials">
            <h3>{t('footer_find_me')}</h3>

            <p>{t('footer_other_links')}</p>

            <div className="footer-social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Elio Valenzuela.
          {' '}All rights reserved.
        </p>

        <a className="footer-back-top" href="#home">
          {t('footer_back_to_top')}
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
