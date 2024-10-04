import './Projects.css'
import Header from '../../components/Header/Header'
import { GiPencilBrush } from "react-icons/gi";
import { GoCodeSquare } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <>
      <Header/>
      <div className='projects'>
        <button className="design" onClick={() => handleNavigate('/design')}>
          <div className="icon-p">
            <GiPencilBrush />
          </div>
          <h1>Design</h1>
        </button> 
        <button className="web-design" onClick={() => handleNavigate('/website')}>
          <div className="icon-p">
            <GoCodeSquare />
          </div>
          <h1>Web Design / Frontend</h1>
        </button>
      </div>
    </>
  )
}

export default Projects;
