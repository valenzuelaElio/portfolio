import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react';

const Contact = () => {

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
    setResult(data.success ? "Success!" : "Error");
    if(data.success){
        alert(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contactame</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Hablemos</h1>
                <p>En este momento estoy disponible para integrarme a nuevos proyectos. Busco participar en equipos creativos donde pueda contribuir con mis conocimientos en desarrollo y diseño de videojuegos.</p>
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
                <label htmlFor="">Tu nombre</label>
                <input type="text" placeholder='Ingresa tu nombre' name='name'/>
                <label htmlFor="">Tu Email</label>
                <input type="text" placeholder='Ingresa tu Email' name='name'/>
                <label htmlFor="">Escribe aqui tu mensaje</label>
                <textarea name="message"rows="8" placeholderid="Ingresa tu mensaje aqui"></textarea>
                <button type='submit' className='contact-submit'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact