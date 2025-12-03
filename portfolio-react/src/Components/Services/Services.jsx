import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

import { useTranslation } from "react-i18next";


 /*
<div className='services-readmore'>
    <p>Saber mas</p>
    <img src={arrow_icon} alt="" />
</div>
*/

const Services = () => {

    const { t } = useTranslation();

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>{t("NavBar_Services")}</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="services-container">
            {Services_Data.map((service, index)=>{
                return <div key={index} className='services-format'>
                    <h2>{t("service_" + service.s_no + "_name")}</h2>
                    <p>{t("service_" + service.s_no + "_desc")}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services