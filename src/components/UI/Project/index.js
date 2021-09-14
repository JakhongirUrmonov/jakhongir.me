import React, { useState } from "react";
import close from "../../../assets/images/close.webp";
import { Image, Modal } from "react-bootstrap";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer/dist/rich-text-html-renderer.es5";

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
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <button onClick={() => handleClose()} className="modal-close">
            <img src={close} alt={close} />
          </button>
          <h3 className="modal-body-title">
            {project.title} - {project.shortInfo}
          </h3>
          <img
            alt={project.bigImage.fields.file.title}
            src={project.bigImage.fields.file.url}
          />
          <div>
            <div
              className="blog-body"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(project.fullText),
              }}
            />
          </div>
          <a
            href={project.link ? project.link : "#"}
            style={{ float: "right", textDecoration: "none" }}
            className="custom-button"
          >
            {project.link ? "Visit website" : "Coming soon"}
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Project;
