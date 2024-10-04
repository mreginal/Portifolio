import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import About from '../About/About'

const Home = () => {
  return (
    <>
      <Header/>
      <div className="large-logo">
        <img src="/logo/logo-dark.png" alt="logo"/>
        <h1>Portifólio de Design, Front-end e Web Design</h1>
      </div>
    </>
  )
}

export default Home