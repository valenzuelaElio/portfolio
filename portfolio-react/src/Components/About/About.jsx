import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profilelarge.svg'

import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
      <div id='about' className='about'>
          <div className="about-title">

              <h1>{t("NavBar_About")}</h1>
              <img src={theme_pattern} alt=''/>

          </div>
          <div className="about-sections">
            <div className="about-left">
              <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>{t("AboutMe_resume")}</p>
                <p>{t("AboutMe_resume2")}</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p> Unreal (C++)</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p> Unity (C#)</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p> Javascript </p><hr style={{width:"20%"}} /></div>
                <div className="about-skill"><p> HTML & CSS </p><hr style={{width:"20%"}} /></div>
                <div className="about-skill"><p> REACT </p><hr style={{width:"10%"}} /></div>
                <div className="about-skill"><p> Blender </p><hr style={{width:"10%"}} /></div>
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>8+</h1>
              <p>{t("AboutMe_ach1")}</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>5+</h1>
              <p>{t("AboutMe_ach2")}</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>10+</h1>
              <p>{t("AboutMe_ach3")}</p>
            </div>
          </div>
      </div>
  )
}

export default About