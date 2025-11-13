import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

    const [visibleCount, setVisibleCount] = useState(9) // cantidad inicial de imágenes

    const handleShowMore = () => {
        // Si ya se muestran todas, podrías ocultar de nuevo o simplemente no hacer nada
        if (visibleCount < mywork_data.length) {
        setVisibleCount(mywork_data.length) // mostrar todas
        } else {
        setVisibleCount(9) // opcional: volver a colapsar
        }
    }

 return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Trabajos más recientes</h1>
        <img src={theme_pattern} alt=''/>
      </div>

      <div className='mywork-container'>
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <img key={index} src={work.w_img} alt=""/>
        ))}
      </div>

      {mywork_data.length > 9 && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>{visibleCount < mywork_data.length ? 'Mostrar más' : 'Mostrar menos'}</p>
          <img 
            src={arrow_icon} 
            alt="" 
            style={{ transform: visibleCount < mywork_data.length ? 'rotate(0deg)' : 'rotate(180deg)', transition: '0.3s' }} 
          />
        </div>
      )}
    </div>
  )
}

export default MyWork