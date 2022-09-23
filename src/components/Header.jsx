import React from 'react'
import navbar from '../assets/img/lgtbq.png';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div className='justify-content-center'>
          <img className='bg-img opacity-75' src={navbar} alt='flag' />
        </div>
        <div className='d-flex justify-content-center'>
          <div>
            <Link to='/'><img className='w-75 mt-4 m-9' src={logo} alt='logo' /></Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header