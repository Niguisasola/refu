import React from 'react'
import { Link } from 'react-router-dom';

function InfoDetail() {
  return (
    <>
    <div className="detailCard d-flex justify-content-center ">
        <div className="card mb-3 w-50 h-auto mt-5 ">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="" className="img-fluid rounded-start" alt=""></img>
                </div>
                
                <div className="col-md-8">
                    <div className="card-body">
                    <p className="card-text">Name: </p>
                        <p className="card-text">Street: </p>
                        <p className="card-text">City: </p>
                        <p className="card-text">State: </p>
                        <p className="card-text">Directions: </p>
                        <p className="card-text">Comments: </p>
                        <p className="card-text">Country: </p>
                    </div>
                </div>
                <Link to='/home'><button className='btn btn-dark rounded-lg' type="submit">Home</button></Link>
            </div>  
        </div>
    </div>                            
    </>
  )
}

export default InfoDetail