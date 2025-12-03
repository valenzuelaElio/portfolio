import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Elio_Valenzuela_CV.pdf"; // ruta dentro de tu carpeta public o assets
    link.download = "Elio_Valenzuela_CV.pdf";   // nombre del archivo al guardar
    link.click();
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>{t("Hero_Me")}</span> {t("Hero_Me2")}</h1>
        <p>{t("Hero_para")}</p>
        <div className="hero-action">

            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>{t("NavBar_ContactMe")}</AnchorLink></div>
            <div onClick={handleDownload} className="hero-resume">{t("Hero_cv")}</div>

        </div>

    </div>
  )
}

export default Hero