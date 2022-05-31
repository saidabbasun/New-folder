import "../../Style/Home/Catagory.scss";
import {Link} from "react-router-dom";
import React from 'react'

import Carusel from "./Carusel";

const Catagory = () => {
  return (
    <div>
       <div className="mt-5 container-xl pb-5 mb-5 caruselContainer" >
      
          <nav className="navbar navbar-expand-xl navbar-light  align-items-center ">
          <Link to='/'  className="navbar-brand fw-bold">Горячие поступления </Link>
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Фантастика
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">
                  Саморазвитие
                </>
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
