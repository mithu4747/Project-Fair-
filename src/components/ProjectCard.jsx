import React, { useState } from 'react'
import {Card, Modal, Row, Col} from 'react-bootstrap'
import ProjectImage from '../Assets/th.jpg'


function ProjectCard() {
    const [show, setshow] = useState(false)
    const handleClose = ()=> setshow(false);
    const handleShow = ()=> setshow(true);
  return (
    <>
      <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={ProjectImage} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <img style={{width:'1005'}} src={ProjectImage} alt="" />
                </Col>
                <Col>
                <h2>Project Title </h2>
                <p>Project Overview : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, animi distinctio. Nemo consequatur maxime adipisci, totam quo facilis minima enim itaque, fugiat excepturi molestias recusandae quaerat inventore tempora, distinctio incidunt.</p>
                <p>Language Used: <span className='fw-bolder'>HTML,CSS,REACT</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a href="https://github.com/mithu4747/Media-Player-React-App" target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                <a href="https://media-player-with-json-server.netlify.app" target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
            </Modal.Body>

    </Modal>
    </>
  )
}

export default ProjectCard