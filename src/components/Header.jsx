import React from 'react'
import navbar from '../assets/img/lgtbq.png';
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <>
      <header>
        <div className='w-screen h-[80px] z-10 fixed drop-shadlow-lg'>
          <div className='px-2 flex justify-between'>
            <img className='bg-img' src={navbar} alt='flag' />
            <section>
              <img className='flex items-center' src={logo} alt='logo-refurestroom' />
            </section>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header