import React, { useState } from 'react'
import { Card,Col,Modal, Row } from 'react-bootstrap'





function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       <Card style={{width:'28rem'}} className='shadow btn mt-5' onClick={handleShow}>
      <Card.Img width={'100%'} variant="top" src="https://project-fair-server.onrender.com/uploads/image-1700205768117-mediaplayer.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className='img-fluid' style={{height:'250px'}} src="https://project-fair-server.onrender.com/uploads/image-1700205768117-mediaplayer.png" alt="" />
            </Col>
            <Col md={6}>
              <h2 className='fw-bolder text-dark'>Project Title</h2>
              <p>Project OverView: <span className='fw-bolder' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum illo, praesentium itaque reiciendis nesciunt reprehenderit inventore expedita! Expedita quasi earum, reprehenderit iusto hic dolor dolorum non ex dolorem laudantium!</span></p>
              <p>Language Used: <span className="text-bolder text-danger" >HTML,JS,CSS</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="https://github.com/sauraval/Project-Fair-Front-End.git" target='_blank' className='btn me-3'> <i style={{height:'40px'}} className='fa-brands fa-github fa-2x'></i></a>
            <a href="https://project-fair-react-june23.vercel.app/" target='_blank' className='btn me-3'> <i style={{height:'40px'}} className='fa-solid fa-link fa-2x'></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard