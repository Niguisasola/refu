import React from 'react';
import { Link } from 'react-router-dom';
import pride from '../assets/img/pride.png'
import '../index.css'

function Titles() {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div>
                    <div className="cardmedia card-body" style={{ width: 23 + 'rem' }}>
                        <div className='d-flex justify-content-center'>
                            <Link to='/home'><h5 className="btn fw-bold border-info rounded-5 fs-1 text lh-1 mt-3 pt-3 pb-3 text-info" type="submit">ENCUENTRA TU SANITARIO SEGURO</h5></Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img className='bg-img opacity-75 mt-5 mb-5' src={pride}></img>
                        </div>
                        <div className='d-flex justify-self-center'>
                            <p className="card-subtitle mt-3 mb-3 text-muted text-center fw-lighter fs-4 text lh-1">Dedicado a personas transgénero, intersexuales y no binarias</p>
                        </div>
                        <p className="card-text text-center mr-3 ml-8 mt-3 fs-5 text lh-1 ">Somos concientes que vivir en una sociedad violenta e intolerante a la diversidad puede ser agobiante y hasta peligroso. Por eso hermos ideado refurestroom para que encuentres aquí lo que estás buscando.</p>
                        <div className='d-flex justify-content-evenly  mt-5'>
                            <Link to='/login'><button className='btn btn-outline-warning rounded-5 fs-5' type="submit"><p className='mx-5 mt-3'>LOGIN</p></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titles   