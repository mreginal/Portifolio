import './Projects.css'
import React from 'react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import NavigateButton from '../../components/NavigateButton/NavigateButton';
import Header from '../../components/Header/Header';

const ProjectPage = ({ project }) => {
  return (
<>
    <Header/>
    <div className="project-details">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <img src={project.imgSrc} alt={project.title} />
        <div className="buttons">
            <NavigateButton url={project.githubUrl} Icon={FaGithub} label='Ver no GitHub' />
        </div>
    </div>
</>
)}

export default ProjectPage
