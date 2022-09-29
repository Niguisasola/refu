import React from 'react'
import { Link } from 'react-router-dom';
import ranking from '../assets/img/star.png';
import add from '../assets/img/add.png';
import favorites from '../assets/img/favorites.png';
import listed from '../assets/img/list.png'

function NavButtons() {
    return (
        <div>
        <div className="buttons d-flex justify-content-evenly gap-3 m-3">
            <Link to='/add'><button className='btn btn-white border-dark rounded-4 opacity-75' type="submit"><img className='bg-img' src={add} alt='add' /></button></Link>
            <Link to='/ranking'><button className='btn btn-white border-dark rounded-4 opacity-75' type="submit"><img className='bg-img' src={ranking} alt='ranking' /></button></Link>
            <Link to='/listed'><button className='btn btn-white border-dark rounded-4 mr-3' type="submit"><img className='bg-img' src={listed} alt='listed' /></button></Link>
        </div>
        </div>
    )
}

export default NavButtons