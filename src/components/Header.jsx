import React from 'react'
import navbar from '../assets/img/lgtbq.png';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div className='w-screen h-[80px] z-10 fixed drop-shadlow-lg'>
          <div className='px-2 flex justify-between'>
            <img className='bg-img' src={navbar} alt='flag' />
            <section className='d-flex justify-content-center mt-4'>
              <Link to='/'><img className='w-50 ' src={logo} alt='logo' /></Link>
            </section>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header