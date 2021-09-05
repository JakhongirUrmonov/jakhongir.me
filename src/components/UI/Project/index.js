import React, { useState } from "react";
import close from "../../../assets/images/close.png";
import { Image, Modal } from "react-bootstrap";

function Project({ project }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="col-sm-4 col-xs-6 py-3">
      <div className="project">
        <Image
          onClick={() => handleShow()}
          rounded
          alt={project.smallImage.fields.file.title}
          src={project.smallImage.fields.file.url}
        />
        <div className="project-text">
          <h5>{project.title}</h5>
          <p>{project.shortInfo}</p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <button onClick={() => handleClose()} className="modal-close">
            <img src={close} alt={close} />
          </button>
          <h3 className="modal-body-title">{project.title}</h3>
          <img
            alt={project.bigImage.fields.file.title}
            src={project.bigImage.fields.file.url}
          />
          <div className="modal-body-content">
            <div>
              <h4>Задача</h4>
              <div>{project.tasks}</div>
            </div>
            <div>
              <h4>Решение</h4>
              <div>{project.solution}</div>
            </div>
            <div>
              <h4>Разработка</h4>
              <div>{project.development}</div>
            </div>
            <div></div>
          </div>
          <a
            href={project.link ? project.link : "#"}
            style={{ float: "right", textDecoration: "none" }}
            className="custom-button"
          >
            {project.link ? "Visit website" : "Voming soon"}
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Project;
