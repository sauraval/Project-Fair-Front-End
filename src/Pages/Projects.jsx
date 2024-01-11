import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'



function Projects() {
  return (
    <>
      <Header />
      <div style={{marginTop:'100px'}} className="project-page-design">
          <div className="d-flex justify-content-between">
            <h1>All Projects</h1>
            <input style={{width:'300px',marginRight:'30px'}} className=' form-control ' type="text" placeholder='Search Project By Language Used' />
          </div>
          <Row className='mt-5 container-fluid '>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>xy
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Projects