import './About.css'
import React from 'react'
import Header from '../../components/Header/Header'

const About = () => {

  const items = [
    "/icons/html.png","/icons/css.png","/icons/js.png","/icons/ts.png","/icons/react.png",
    "/icons/ai.png","/icons/ps.png","/icons/figma.png","/icons/canva.png","icons/github.png"
  ];

  const loopedItems = [...items, ...items];

  return (
    <>
      <Header/>
      <div className="about">
        <div className="info">
          <img src="/logo/logo-dark.png" alt="logo"/>
          <p>Olá, me chamo <span>Maria Regina</span>, sou concluinte do curso de Ciência da Computação pela UEPB (Universidade Estadual da Paraíba). <br /> <br /> Sou Designer, Frontend e Web Designer iniciante e aqui, você poderá ver um pouco do meu trabalho. <br/> <br/> Minhas <span>principais habilidades</span> são com:</p>

          <div className="belt">
            <div className="belt-items">
                {loopedItems.map((item, index) => (
                  <div key={index} className="belt-item">
                    <img src={item} alt={`item-${index}`} />
                  </div>
                ))}
            </div>
          </div>

        </div>

        <div className="attachment">
          <img src="/me/photo-profile.jpeg" alt="foto-profile"/>
          <button>
            <a href="/me/cv.pdf" download={'Currículo- Maria Regina'}>Baixar CV</a>
          </button>
        </div> 

      </div>
    </>
  )
}

export default About