import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Carrinho from './Carrinho';
import Produtos from './Produtos';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Peça Já!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link active' to='/'>Início</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to='/carrinho'>Carrinho</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route index element={<Produtos />} />
        <Route path='/carrinho' element={<Carrinho />} />
      </Routes>

    </BrowserRouter>
  );
}

export { App };
