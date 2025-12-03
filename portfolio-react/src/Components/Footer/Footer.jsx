import React from 'react'
import "./Footer.css"
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

import { useTranslation } from "react-i18next";

/*
<div className='footer-top-right'>
  <div className="footer-email-input">
    <img src={user_icon} alt="" />
    <input type="email" placeholder='Ingresa tu email'/>
  </div>
  <div className='footer-subscribe'>
    Subscribe
  </div>
</div>
*/
const Footer = () => {

  const { t } = useTranslation();

  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt="" />
                <p>{t("footer_resume")}</p>
            </div>
            
        </div>
        <hr />
            <div className='footer-bottom'>
              <p className="footer-bottom-left">
              © 2025 Elio Valenzuela. All rights reserved.
              </p>
              <div className='footer-bottom-right'>
                <p>{t("footer_tos")}</p>
                <p>{t("footer_pp")}</p>
              </div>
            </div>
    </div>
  )
}

export default Footer