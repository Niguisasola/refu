import React from 'react'
import { Link } from 'react-router-dom';
import ranking from '../assets/img/star.png';
import add from '../assets/img/add.png';
import favorites from '../assets/img/favorites.png'

function Home() {
    return (
        <div className="d-flex justify-content-evenly gap-5 mt-3">
            <Link to='/add'><button className='btn btn-white border-dark' type="submit"><img className='bg-img' src={add} alt='add' /></button></Link>
            <Link to='/ranking'><button className='btn btn-white border-dark' type="submit"><img className='bg-img' src={ranking} alt='ranking' /></button></Link>
            <Link to='/favorites'><button className='btn btn-white border-dark' type="submit"><img className='bg-img' src={favorites} alt='ranking' /></button></Link>
        </div>
    )
}

export default Home