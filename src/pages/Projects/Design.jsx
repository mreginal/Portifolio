import './Projects.css'
import React from 'react'
import Header from '../../components/Header/Header'
import NavigateButton from '../../components/NavigateButton/NavigateButton'
import {FaGithub, FaFigma, FaInstagram} from "react-icons/fa"

const Design = () => {
  return (
    <>
      <Header/>

      <div className="projects-container">
        <div className="design-card">
            <h2>Projeto Suerdo Academia</h2>
              <div className="p-infos">
                <img src="/projects/suerdo/page.png" alt="suerdo"/>
                <div className="p-infos-right">
                  <p>Identidade Visual e posts produzidos para uma academia. <br /> @suerdo_academia</p>
                  <div id='buttons'>   
                    <NavigateButton url='https://www.instagram.com/suerdo_academia/' Icon={FaInstagram} label='Ver no Instagram'/>
                  </div>
                </div>
              </div>
          </div>

          <div className="design-card">
            <h2>Projeto Café na Cesta</h2>
              <div className="p-infos">
                <img src="/projects/cnc/logo cafe-na-cesta.png" alt="cesta"/>
                <div className="p-infos-right">
                  <p>Logo produzida para uma empresa individual (EI) de cafés da manhã.</p>
                </div>
              </div>
          </div>

      </div>
    </>
  )
}

export default Design