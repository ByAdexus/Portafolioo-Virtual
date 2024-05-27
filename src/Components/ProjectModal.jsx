import '../App.css';

const ProjectModal = ({ showModal, selectedProject, handleCloseModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      {showModal && selectedProject && (
       <div className="modal-wrap">
       <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="Project" />
       <div className="modal-info">
         <p>{selectedProject.description}</p>
         <div className="modal-buttons">
           <button onClick={() => window.open(selectedProject.html_url, "_blank")}>
             GitHub
           </button>
           <button onClick={handleCloseModal}>
             Cerrar
           </button>
         </div>
       </div>
     </div>
      )}
    </div>
  );
};

export default ProjectModal;