import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Home from '../pages/Home';
import Login from '../pages/LogIn';
import Register from '../pages/Register';
import Detail from '../pages/Detail';
import Ranking from '../pages/Ranking';
import Favorites from '../pages/Favorites';
import Add from '../pages/Add';


function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/ranking' element={<Ranking/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router