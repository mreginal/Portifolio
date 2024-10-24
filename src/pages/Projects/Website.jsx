import React from 'react';
import projectsData from '../../data/projectsData';
import Header from '../../components/Header/Header';
import NavigateButton from '../../components/NavigateButton/NavigateButton';
import { FaArrowCircleRight } from 'react-icons/fa';

const Website = () => {
  return (
    <>
      <Header />
      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <div className="p-infos">
              <img src={project.imgSrc} alt={project.title} />
              <div className="p-infos-right">
                <p>{project.description}</p>
                <NavigateButton url={`/project/${project.id}`} Icon={FaArrowCircleRight} label='Ver mais' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Website;
