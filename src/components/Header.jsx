import React from 'react'
import navbar from '../assets/img/lgtbq.png';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
          <img className='bg-img opacity-75' src={navbar} alt='flag' />
        <div className='d-flex justify-items-center mt-4'>

          <Link to='/'><img className='w-50' src={logo} alt='logo' /></Link>
      
        </div>
      </header>
    </>
  )
}

export default Header