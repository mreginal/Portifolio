import React from 'react'
import Header from '../../components/Header/Header'
import NavigateButton from '../../components/NavigateButton/NavigateButton'
import {FaGithub, FaFigma} from "react-icons/fa"

const Website = () => {
  return (
    <>
      <Header/>
      <div className="projects-container">
        <div className="project-card">
          <h2>Projeto Taverna</h2>
            <div className="p-infos">
              <img src="/projects/taverna/logo-taverna.png" alt="taverna"/>
              <div className="p-infos-right">
                <p>Taverna é um projeto idealizado na disciplina de Gerenciamento de Projetos (Computação-7ºP), que refere-se a uma rede social voltada para cozinheiros e amantes da culinária em geral. O site conta com um sistema de postagens, likes, comentários, perfil, página de favoritos e notificações até o momento. O evoluiremos criando os sistemas de Guilda, Chat e Níveis (de Cozinheiro iniciante à Mago dos Sabores). <br /> Este projeto é desenvolvido com a parceria de Luan Nycholas.</p>
                <NavigateButton url='https://github.com/mreginal/Taverna' Icon={FaGithub} label='Ver no Github'/>
              </div>
            </div>
        </div>

        <div className="project-card">
          <h2>Projeto SIAP</h2>
            <div className="p-infos">
              <img src="/projects/siap/load.png" alt="siap"/>
              <div className="p-infos-right">
                <p>SIAP (Sistema Integrado de Atléticas da Paraíba) é um projeto que tem o intuito de trazer uma plataforma bem estruturada para as associações esportivas da faculdade, contando com funcionalidades que facilitem o acontecimento dos jogos e eventos das atléticas. <br /> Este projeto é desenvolvido com a parceria de Luan Nycholas e Davi Miguel.</p>
                <div id='buttons'>   
                  <NavigateButton url='https://github.com/DaviMF29/S.I.A.P' Icon={FaGithub} label='Ver no Github'/>
                  <NavigateButton url='https://www.figma.com/design/pT1y1rcjL8sed4urSU6YDe/SIAP?node-id=0-1&t=dkCKOm5WexXhU7nM-1' Icon={FaFigma} label='Ver no Figma'/>
                </div>
              </div>
            </div>
        </div>

        <div className="project-card">
          <h2>Projeto ExecuTree Adventures</h2>
            <div className="p-infos">
              <img src="/projects/executree/ea.png" alt="siap"/>
              <div className="p-infos-right">
                <p>ExecuTree Adventures foi a aplicação fruto do projeto de pesquisa que utilizei como TCC, que propõe a utilização de jogos para ajudar crianças a desenvolverem suas funções executivas. <br /> Este projeto foi desenvolvido com a parceria de Luan Nycholas e Davi Miguel, como também o nosso orientador Prof. Dr. Jucelio Soares.</p>
                <div id='buttons'>   
                  <NavigateButton url='https://github.com/mreginal/Executree-Adventures' Icon={FaGithub} label='Ver no Github'/>
                </div>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Website