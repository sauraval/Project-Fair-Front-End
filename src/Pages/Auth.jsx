import React from 'react'
import { Link } from 'react-router-dom'


function Auth({insideRegister}) {
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container w-75">
            <Link to={'/'}> <i className='fa-solid fa-arrow-left me-1'></i> Back to Home</Link>
            <div className="card shadow p-5 bg-success">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <img className='w-100' src="https://clipground.com/images/login-logo-clipart-2.png" alt="login" />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className='fw-bolder text-light mt-2'> <i style={{height:'41px'}} className='fa-solid fa-paperclip'></i> Project Fair </h1>
                            <h5 className="fw-bolder mt-2 pb-3 text-light">
                                {insideRegister?'Sign up to your Account':'Sign In to your Account'}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Auth