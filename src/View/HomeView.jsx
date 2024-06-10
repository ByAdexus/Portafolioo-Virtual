import React, { useState, useEffect } from 'react';
import '../App.css';

const HomeView = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [specificProjects, setSpecificProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const githubResponse = await fetch('https://api.github.com/users/ByAdexus/repos');
        const githubData = await githubResponse.json();
        const filteredProjects = githubData.filter(repo => repo.name !== 'Api-Portafolio');
        const fetchedProjects = filteredProjects.map(repo => ({
          name: repo.name,
          description: repo.description,
          githubLink: repo.html_url,
          language: repo.language,
          technologies: repo.technologies,
          image: getImageForProject(repo.name)
        }));
        setProjects(fetchedProjects);
        const specificProjects = fetchedProjects.filter(project => project.name === 'Portafolioo-Virtual' || project.name === 'Class-Top').slice(0, 2);
        setSpecificProjects(specificProjects);
      } catch (error) {
        console.error('Error fetching projects from GitHub:', error);
      }
    };

    fetchProjects();
  }, []);

  const getImageForProject = (projectName) => {
    if (projectName === 'Portafolioo-Virtual') {
      return 'https://i.ibb.co/8B5ZtC2/888.jpg';
    } else if (projectName === 'Class-Top') {
      return 'URL_DE_LA_IMAGEN_DE_CLASS-TOP';
    } else {
      return 'URL_POR_DEFECTO';
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') return project.language === 'JavaScript' || project.technologies?.includes('JavaScript');
    if (activeTab === 'mobile') return project.language === 'Java' || project.technologies?.includes('Java');
    return true;
  }).slice(0, 2);

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
        <div key={index} className={`project-card ${index === 0 ? 'first-project' : ''}`}>
          <h3><a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
    </div>
  </div>
</div>

{/* Sección "Contáctame" */}
<section className="contact" id="contact">
            <div className="container">
                <div className="heading text-center">
                    <h2>Contact
                        <span> Me </span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br />incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="title">
                            <h3>Contact detail</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                        <div className="content">
                            <div className="info">
                                <i className="fas fa-mobile-alt"></i>
                                <h4 className="d-inline-block">PHONE :<br /><span>+12457836913 , +12457836913</span></h4>
                            </div>
                            <div className="info">
                                <i className="far fa-envelope"></i>
                                <h4 className="d-inline-block">EMAIL :<br /><span>example@info.com</span></h4>
                            </div>
                            <div className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4 className="d-inline-block">ADDRESS :<br /><span>6743 last street , Abcd, Xyz</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                            </div>
                            <button className="btn btn-block" type="submit">Send Now!</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};



export default HomeView;