import React, { useState, useEffect } from 'react';
import ProjectModal from '../Components/ProjectModal'; // Importa el nuevo componente ProjectModal
import '../App.css'; // Asegúrate de importar tu archivo CSS


const HomeView = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const projectsToShow = ["Portafolioo-Virtual", "Class-Top"]; // Lista de repositorios que deseas mostrar

  useEffect(() => {
    // Fetch projects from GitHub API
    fetch('https://api.github.com/users/ByAdexus/repos')
      .then(response => response.json())
      .then(data => {
        // Filtrar los proyectos para mostrar solo los repositorios deseados
        const filteredProjects = data.filter(project => projectsToShow.includes(project.name));
        setProjects(filteredProjects);
      })
      .catch(error => console.error('Error fetching GitHub projects:', error));
  }, []);

  // Función para cambiar la pestaña activa
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProjectClick = (project) => {
    // Aquí, asegúrate de incluir la URL de la imagen del proyecto seleccionado
    const selectedProjectInfo = {
      ...project,
      image: "https://i.ibb.co/8B5ZtC2/888.jpg",
      description: "AWDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD",
      technologies: ["React", "Node.js", "HTML", "CSS"], 
    };
  
    setSelectedProject(selectedProjectInfo);
    setShowModal(true);
  };
  

  const handleCloseModal = () => {
    console.log("Modal cerrado");
    setShowModal(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    console.log("Modal abierto:", showModal);
    console.log("Proyecto seleccionado:", selectedProject);
  }, [showModal, selectedProject]);

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') return project.language === 'JavaScript';
    if (activeTab === 'mobile') return project.language === 'Java';
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
    <div key={project.id} className={`project-card ${index === 0 ? 'first-project' : ''}`} onClick={() => handleProjectClick(project)}>
      {/* Utiliza la referencia a la imagen importada */}
      {index === 0 && <img src="https://i.ibb.co/8B5ZtC2/888.jpg" alt={project.name} />}
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