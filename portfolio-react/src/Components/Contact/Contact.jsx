import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react';

import { useTranslation } from "react-i18next";

const Contact = () => {

    const { t } = useTranslation();

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "92f1fdfa-cd31-4ada-9e5a-e40f6428555b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
            setResult(data.success ? "Enviado" : "Error");
            if(data.success){
                alert(data.message);
            }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>{t("NavBar_ContactMe")}</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>{t("contact_talk")}</h1>
                <p>{t("contact_status")}</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>valenzuela.eliogd@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+56 9 62514590</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Talca, Chile</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">{t("contact_name")}</label>
                <input type="text" placeholder={t("contact_name_placeholder")} name='name'/>
                <label htmlFor="">{t("contact_email")}</label>
                <input type="text" placeholder={t("contact_email_placeholder")} name='name'/>
                <label htmlFor="">{t("contact_text")}</label>
                <textarea name="message"rows="8" placeholderid={t("contact_text_placeholder")}></textarea>
                <button type='submit' className='contact-submit'>{t("contact_send")}</button>
            </form>
        </div>
    </div>
  )
}

export default Contact