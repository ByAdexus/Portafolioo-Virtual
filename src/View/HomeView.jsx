import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectModal from '../Components/ProjectModal';
import '../App.css';

const HomeView = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const projectsToShow = ["Portafolioo-Virtual", "Class-Top"];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch GitHub projects
        console.log('Fetching GitHub projects...');
        const githubResponse = await fetch('https://api.github.com/users/ByAdexus/repos');
        const githubData = await githubResponse.json();
        console.log('GitHub projects:', githubData);
        const filteredGithubProjects = githubData.filter(project => projectsToShow.includes(project.name));
  
        // Fetch NestJS projects
        console.log('Fetching NestJS projects...');
        const nestResponse = await axios.get('http://localhost:3000/projects-details');
        const nestProjects = nestResponse.data;
        console.log('NestJS projects:', nestProjects);
  
        // Combine both project arrays
        const combinedProjects = [...filteredGithubProjects, ...nestProjects];
        console.log('Combined projects:', combinedProjects);
        setProjects(combinedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
  
    fetchProjects();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProjectClick = async (project) => {
      try {
        // Hacer una solicitud a tu API de NestJS para obtener los detalles del proyecto desde tu base de datos
        const response = await axios.get(`http://localhost:3000/projects-details/${project._id}`);
        const projectDetails = response.data;
    
        // Actualizar el estado del proyecto seleccionado con los detalles obtenidos de tu API
        setSelectedProject(projectDetails);
        setShowModal(true);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };
    

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') return project.language === 'JavaScript' || project.technologies?.includes('JavaScript');
    if (activeTab === 'mobile') return project.language === 'Java' || project.technologies?.includes('Java');
    return true;
  });

  return (
    <div>
      <div className="home-container">
        <div className="background-image"></div>
        <div className="card-container">
          <div className="card">
            <div className="img-bx">
              <img src="https://i.ibb.co/b5MhVtn/Sergio.jpg" alt="img" />
            </div>
            <div className="content">
              <div className="detail">
                <h2>Sergio Tejeda<br /><span>Ingeniero en desarrollo y gestión de software</span></h2>
                <ul className="sci">
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Acerca de mí" */}
      <div className="about-me-section">
        <div className="about-me">
          <h2><i className="fas fa-user"></i> Acerca de mí</h2>
          <div className="hr-line hr-line-about-me"></div> {/* Línea horizontal */}
          <p>Soy un desarrollador de software junior apasionado por la tecnología y el trabajo en equipo. Disfruto creando soluciones innovadoras y colaborando con otros para lograr objetivos comunes.</p>
          <div className="tools-card">
            <h3>Herramientas y Tecnologías</h3>
            <ul>
              <li><i className="fab fa-react"></i> React</li>
              <li><i className="fab fa-angular"></i> Angular</li>
              <li><i className="fab fa-js"></i> JavaScript</li>
              <li><i className="fab fa-node-js"></i> Node.js</li>
              <li><i className="fab fa-html5"></i> HTML & CSS</li>
              <li><i className="fab fa-git-alt"></i> Git</li>
              <li><i className="fas fa-database"></i> SQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <div className="projects">
          <h2><i className="fas fa-project-diagram"></i> Proyectos</h2>
          <div className="hr-line hr-line-projects"></div>
          <div className="tab-strip">
            <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => handleTabChange("all")}>Todos los proyectos</button>
            <button className={`tab ${activeTab === "web" ? "active" : ""}`} onClick={() => handleTabChange("web")}>Proyectos web</button>
            <button className={`tab ${activeTab === "mobile" ? "active" : ""}`} onClick={() => handleTabChange("mobile")}>Proyectos móviles</button>
          </div>
          <div className="project-list">
  {filteredProjects.map((project, index) => (
    <div key={project.id || index} className={`project-card ${index === 0 ? 'first-project' : ''}`} onClick={() => handleProjectClick(project)}>
      <img src={project.image || "https://i.ibb.co/8B5ZtC2/888.jpg"} alt={project.name} />
    </div>
  ))}
</div>
        </div>
      </div>

      <ProjectModal showModal={showModal} handleCloseModal={handleCloseModal} selectedProject={selectedProject} />
    </div>
  );
};

export default HomeView;
