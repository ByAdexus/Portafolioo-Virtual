import React from 'react';
import '../App.css'; // Asegúrate de importar tu archivo CSS

const HomeView = () => (
  <div>
    <div className="home-container">
      <div className="background-image"></div>
      <div className="card-container">
        <div className="card">
          <div className="img-bx">
            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
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

    {/* Nueva sección "Acerca de mí" */}
    <div className="about-me-section">
      <div className="about-me">
        <h2>Acerca de mí</h2>
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
  </div>
);

export default HomeView;
