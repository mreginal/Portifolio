import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {

  return (
    <>
      <header>
        <div className="logo">
          <img src="/logo/mini-logo-dark.png" alt="logo-mr" />
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Início</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/projects"className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Contato</NavLink>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Header
