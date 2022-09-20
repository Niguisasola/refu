import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Home from '../pages/Home';
import Iniciasesion from '../pages/Iniciasesion';
import Register from '../pages/Register';
import Detail from '../pages/Detail';
import Ranking from '../pages/Ranking';
import Favorites from '../pages/Favorites';
import Add from '../pages/Add';
import Listed from '../pages/Listed';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Iniciasesion />} />
        <Route path='/register' element={<Register />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/listed' element={<Listed />} />
        <Route path='/add' element={<Add />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router