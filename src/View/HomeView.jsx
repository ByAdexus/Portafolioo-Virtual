import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const HomeView = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchFirebaseProjects = async () => {
      try {
        const response = await axios.get('https://detalles-proyectos-default-rtdb.firebaseio.com/.json');
        const firebaseProjects = response.data;

        const firebaseProjectsArray = Object.keys(firebaseProjects).map(key => ({
          id: key,
          ...firebaseProjects[key],
          description: firebaseProjects[key].Description, // Mapeamos Description a description
          technologies: firebaseProjects[key].tecnologies // Mapeamos tecnologies a technologies
        }));

        setProjects(firebaseProjectsArray);
      } catch (error) {
        console.error('Error fetching Firebase projects:', error);
      }
    };

    fetchFirebaseProjects();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="/"><i className="fab fa-instagram"></i></a>
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
          <div className="hr-line hr-line-about-me"></div>
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

      {/* Sección de proyectos */}
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
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card ${index === 0 ? 'first-project' : ''}`}>
                <img src={project.image || "https://i.ibb.co/8B5ZtC2/888.jpg"} alt={project.name} />
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p><strong>Tecnologías:</strong> {project.technologies}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* Sección "Contáctame"  https://classtop-15d2c.web.app/ */}
    <div className="contact-section">
        <div className="contact">
        <h2><i className="fas fa-project-diagram"></i> Contacto</h2>
          <div className="hr-line hr-line-contact"></div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar</button> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeView;