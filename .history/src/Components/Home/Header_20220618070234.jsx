
import React, { useEffect, useState }  from 'react'
import Logo  from '../../assets/icon/Logo.svg'
import Menu from '../../assets/icon/Menu.svg'
import '../../Style/Home/Header.scss'
import {Link} from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const modalShow=()=>{
    setOpen(!open)
        }
  useEffect(() => {
   
    
      
    const    NavLink = document.querySelectorAll(".nav-link");
  
      function linkAction() {
        setOpen(!open)  
  
      }
  
      NavLink.forEach((n) => n.addEventListener("click", linkAction));

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >=100)
      );
    }
  });
  return (
    <div className={`header ${
      small ? "HeaderBg" : ""
    }`}>
    <nav className="navbar container-xl justify-content-around  navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/">
    <img src={Logo} alt="logo" />
  </Link>


 
  <ul className="navbar-nav navbarHeader">
      <li className="nav-item active">
        <Link className="nav-link" to="/Aktsiya">Акции </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Katalog">Каталлог</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/Dastafka">Доставка </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Blog">Блог</Link>
      </li>
      </ul>

  <form className="  searchForm">
  <i className="uil uil-search"></i> 
      <input className="form-control" type="search" placeholder=" Поиск" aria-label="search"/>
  
    </form>
    <div className='heartCart d-flex  '>
    <i className="uil uil-heart"></i>
    <div className="cart d-flex align-items-center">
    <i className="uil uil-shopping-cart"></i>
    <div className="dropdown">
  <button  className="Btn  dropdown-toggle" type='button'  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  2 228 грн.  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" to="/">2 228 грн.</Link></li>
    <li><Link className="dropdown-item"  to="/">3 228 грн.</Link></li>
    <li><Link className="dropdown-item"  to="/"> 228 грн.</Link></li>
  </ul>
</div>
</div>
    
        </div>
        <img onClick={modalShow} className='menu  d-xxl-none ' src={Menu} alt="Menu" />
</nav>
<div className={`RightModal ${open? 'modalOpen':''}`}>
<div className="ModalMenu">
  <i onClick={modalShow} className="uil uil-multiply"></i>
  <form className="  searchForm">
  <i className="uil uil-search"></i> 
      <input className="form-control" type="search" placeholder=" Поиск" aria-label="search"/>
  
    </form>
   
    <ul className="navbar-nav navbarModal">
    <li className="nav-item active">
        <Link className="nav-link naLink" to="/Aktsiya">Акции </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link naLink" to="/Katalog">Каталлог</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link naLink" to="/Dastafka">Доставка </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link naLink" to="/About">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link naLink" to="/Blog">Блог</Link>
      </li>
      </ul>
  </div>
</div>
</div>
   
  )
}

export default Header