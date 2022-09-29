import React from 'react'
import { Link} from 'react-router-dom';

function CardRestroomInfo(id, name, street, city, state, directions, comments, country) {
  return (
    <div>
    <div className="detailCard d-flex justify-content-center ">
        <div className="card mb-3 w-50 h-auto mt-5 ">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="" className="img-fluid rounded-start" alt=""></img>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Street: {street}</p>
                        <p className="card-text">City: {city}</p>
                        <p className="card-text">State: {state}</p>
                        <p className="card-text">Directions: {directions}</p>
                        <p className="card-text">Comments: {comments}</p>
                        <p className="card-text">Country: {country}</p>
                    </div>
                </div>
                <Link to={`/home/${id}`}><button className='btn btn-dark rounded-lg' type="submit">Home</button></Link>
            </div>
        </div>
    </div></div>
  )
}

export default CardRestroomInfo