import React from 'react';
import { Link } from 'react-router-dom';

function Titles() {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div>
                    <div className="card-body" style={{ width: 28 + 'rem' }}>
                        <div className='d-flex justify-content-center'>
                            <Link to='/home'><h5 className="btn btn-white fw-bold border-dark rounded-5 fs-1 text lh-1 mt-5 pt-5 pb-5" type="submit">ENCUENTRA TU SANITARIO SEGURO</h5></Link>
                        </div>
                        <div className='d-flex justify-self-center'>
                            <p className="card-subtitle mt-5 mb-5 text-muted text-center fw-lighter fs-4 text lh-1">Dedicado a personas transgénero, intersexuales y no binarias</p>
                        </div>
                        <p className="card-text text-center mr-3 ml-8 mt-2 fs-5 text lh-1 ">Somos concientes que vivir en una sociedad violenta e intolerante a la diversidad puede ser agobiante y hasta peligroso. Por eso hermos ideado refurestroom para que encuentres aquí lo que estás buscando.</p>
                        <div className='d-flex justify-content-evenly gap-5 mt-5'>
                            <Link to='/login'><button className='btn btn-light rounded-5 border-dark' type="submit"><p className='mx-5 mt-3'>LOGIN</p></button></Link>
                        <Link to='/register'><button className='btn btn-light rounded-5 border-dark' type="submit"><p className='mx-5 mt-3'>REGISTER</p></button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titles   