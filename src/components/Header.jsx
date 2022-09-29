import React from 'react'
import navbar from '../assets/img/lgtbq.png';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import '../index.css'

function Header() {
  return (
    <>
      <header>
        <div className='justify-content-center'>
          <img className='bg-img opacity-75' src={navbar} alt='flag' />
        </div>
        <Link className='d-flex justify-content-center' to='/'>
          <img className='logo p-4 w-60' src={logo} alt='logo' />
        </Link>
      </header>
    </>
  )
}

export default Header