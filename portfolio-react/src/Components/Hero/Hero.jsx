import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Elio_Valenzuela_CV.pdf"; // ruta dentro de tu carpeta public o assets
    link.download = "Elio_Valenzuela_CV.pdf";   // nombre del archivo al guardar
    link.click();
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Soy Elio Valenzuela, </span> desarrollador de videojuegos radicado en Chile</h1>
        <p>Enfocado en la programación, con más de 8 años de experiencia en diversos lenguajes y motores de desarrollo.</p>
        <div className="hero-action">

            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contactame</AnchorLink></div>
            <div onClick={handleDownload} className="hero-resume">Mi Curriculm</div>

        </div>

    </div>
  )
}

export default Hero