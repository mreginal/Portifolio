import './Contact.css'
import React from 'react'
import Header from '../../components/Header/Header'
import { FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <>
      <Header/>
      <div className="contact">
        <div className="logo-contact">
          <img src="\logo\mini-logo-dark.png" alt="logo"/>
        </div>
        <div>
          <h1>Entre em contato comigo:</h1>
          <div className="info-contact">
            <div className='i'>
              <label>
                <FaInstagramSquare />
                Instagram:
              </label>
              <a href='https://www.instagram.com/find.regina/' target='_blank'> @find.regina</a>
            </div>
            <div className='i'>
              <label>
                <FaLinkedin />
                LinkedIn:
                <a href="https://www.linkedin.com/in/regina-lucena-b6b9a1216/" target='_blank'> Regina Lucena</a>
              </label>
            </div>
            <div className='i'>
              <FaEnvelope />
              <label>
                Email: mreginalucena@gmail.com
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact