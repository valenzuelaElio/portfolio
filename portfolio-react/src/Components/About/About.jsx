import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profilelarge.svg'


const About = () => {
  return (
      <div id='about' className='about'>
          <div className="about-title">

              <h1>Sobre mi</h1>
              <img src={theme_pattern} alt=''/>

          </div>
          <div className="about-sections">
            <div className="about-left">
              <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>Poseo un perfil versátil, fruto de más de una década de participación en una amplia variedad de proyectos y trabajos. He colaborado en desarrollos contemporáneos como Tormented Souls 2, el aclamado juego de survival horror chileno.</p>
                <p>Mi pasión reside en la búsqueda constante de conocimiento que me permita mejorar en los distintos ámbitos de mi trabajo.</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p> Unreal Engine (C++)</p><hr style={{width:"80%"}} /></div>
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
              <p>AÑOS DE EXPERIENCIA</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>5+</h1>
              <p>AÑOS EN LA INDUSTRIA CHILENA</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>10+</h1>
              <p>PROYECTOS COMERCIALES E INDEPENDIENTES</p>
            </div>
          </div>
      </div>
  )
}

export default About