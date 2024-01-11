import React from 'react'
import landingImg from '../assets/Images/landing.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

function Home() {
    return (
        <>
            {/* landing Part</>*/}
            <div className='rounded' style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }}>
                <div style={{ height: '100%',paddingTop:'100px' }} className='container'>
                    <div className='row align-items-center'>
                        <div className="col-lg-5">
                            <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light'>
                                <i style={{ height: '82px' }} className='fa-solid fa-paperclip'></i> Project fair
                            </h1>
                            <p className='text-info'>
                                One Stop Destination for all Software Development Projects. Where User can add and manage their projects.As well as access all projects available in our website... What are you waiting for!!!
                            </p>
                            <Link className='btn btn-warning mt-3' to={'/login'}>Starts to Explore <i className='fa-solid fa-arrow-right ms-2'></i></Link>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4">
                            <img className='img-fluid' src={landingImg} alt="No image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* all projects */}
            <div className="project mt-5">
                <h1 className='text-center mb-5'>Explore Our Projects</h1>
                <marquee>
                <div className="d-flex justify-content-between">
                    <div className="me-5">
                        <ProjectCard/>
                    </div>
                </div>
                </marquee>
                <div className="text-center">
                    <button className='btn btn-link'>View More Projects</button>
                </div>

            </div>
        </>
    )
}

export default Home