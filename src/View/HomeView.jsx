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
          description: firebaseProjects[key].Description,
          technologies: firebaseProjects[key].tecnologies.split(', '), // Separar la cadena por comas
          projectLink: firebaseProjects[key].projectLink,
          image: firebaseProjects[key].image || "https://i.ibb.co/8B5ZtC2/888.jpg"
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

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

   // Filtrar los proyectos según la pestaña activa
  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") {
      return true; // Mostrar todos los proyectos
    } else if (activeTab === "web") {
      return project.type === "web"; // Mostrar solo proyectos web
    } else if (activeTab === "mobile") {
      return project.type === "mobile"; // Mostrar solo proyectos móviles
    }
    return true; // Por defecto, mostrar todos los proyectos
  });

  return (
    <div>
      <div id="home-section" className="home-container">
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
                    <a href="https://www.facebook.com/sergio.tejeda.7773/"><i className="fab fa-facebook-f"></i></a>
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
      <div id="about-section" className="about-me-section">
        <div className="about-me">
          <h2>Acerca de mí</h2>
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
      <div id="projects-section" className="projects-section">
        <div className="projects">
          <h2> Proyectos</h2>
          <div className="hr-line hr-line-projects"></div>
          <div className="tab-strip">
            <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => handleTabChange("all")}>Todos los proyectos</button>
            <button className={`tab ${activeTab === "web" ? "active" : ""}`} onClick={() => handleTabChange("web")}>Proyectos web</button>
            <button className={`tab ${activeTab === "mobile" ? "active" : ""}`} onClick={() => handleTabChange("mobile")}>Proyectos móviles</button>
          </div>
          <div className="project-list">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index === 0 ? 'first-project' : ''}`}
                onClick={() => handleProjectClick(project.projectLink)}
              >
                <img src={project.image || "https://i.ibb.co/8B5ZtC2/888.jpg"} alt={project.name} />
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección "Contáctame" */}
      <div id="contact-section" className="contact-section">
        <div className="contact">
          <h2> Contáctame</h2>
          <div className="hr-line hr-line-contact"></div>
          <div className="contact-container">
            <div className="contact-left">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Direccion</div>
                <div className="text-one">Pueblo Yaqui, Sonora</div>
                <div className="text-two">Cd. Obregon, Sonora</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Telefono</div>
                <div className="text-one">+52 6442527171</div>
                <div className="text-two">+52 6442135841</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Correo electronico</div>
                <div className="text-one">sergiotejedarex@gmail.com</div>
                <div className="text-two">sergiosanchezrex@gmail.com</div>
              </div>
            </div>
            <div className="contact-right">
              <div className="topic-text">Mandame un mensaje</div>
              <p>Si estas interesado en algunas de mis cualidades, me encantarioa que me contactaras.</p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Introduce tu nombre" required />
                </div>
                <div className="input-box">
                  <input type="email" placeholder="Introduce tu Email" required />
                </div>
                <div className="input-box message-box">
                  <textarea placeholder="Introduce tu mensaje" required></textarea>
                </div>
                <div className="button">
                  <input type="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
