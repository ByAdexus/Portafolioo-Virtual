import React from 'react';
import '../App.css';

const ProjectModal = ({ showModal, selectedProject, handleCloseModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      {showModal && selectedProject && (
        <div className="modal-wrap">
          <div className="modal-content">
            <img src={selectedProject.image} alt={selectedProject.name} />
            <div className="modal-info">
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.description}</p>
              <div className="technologies">
                <h4>Tecnologías y Herramientas</h4>
                <ul>
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-buttons">
                {selectedProject.html_url && (
                  <button onClick={() => window.open(selectedProject.html_url, "_blank")}>
                    GitHub
                  </button>
                )}
                <button onClick={handleCloseModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
