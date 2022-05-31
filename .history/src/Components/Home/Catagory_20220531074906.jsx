import "../../Style/Home/Catagory.scss";

import React from 'react'

import Carusel from "./Carusel";

const Catagory = () => {
  return (
    <div>
       <div className="mt-5 container-xl pb-5 mb-5 caruselContainer" >
       <p className=" fw-bold">Горячие поступления </p>
          <nav className="navbar navbar-expand-xl navbar-light  ">
      
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Фантастика
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Саморазвитие
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Детективы
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Детские
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Аудиокниги
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Другие
                </a>
              </li>
            </ul>
          
          </nav>
          
          <Carusel/>
         
          </div>
    </div>
  )
}

export default Catagory
