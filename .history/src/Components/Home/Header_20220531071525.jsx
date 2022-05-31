
import React, { useEffect, useState }  from 'react'
import Logo  from '../../assets/icon/Logo.svg'
import Menu from '../../assets/icon/Menu.svg'
import '../../Style/Home/Header.scss'
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
  }, []);
  return (
    <div className={`header ${
      small ? "HeaderBg" : ""
    }`}>
    <nav className="navbar container-xl justify-content-around  navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">
    <img src={Logo} alt="logo" />
  </a>


 
  <ul className="navbar-nav navbarHeader">
      <li className="nav-item active">
        <a className="nav-link" href="#Aktsiya">Акции </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Katalog">Каталлог</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#Dastafka">Доставка </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">О магазине</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Blog">Блог</a>
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
    <li><a className="dropdown-item" href="#">2 228 грн.</a></li>
    <li><a className="dropdown-item" href="#">3 228 грн.</a></li>
    <li><a className="dropdown-item" href="#"> 228 грн.</a></li>
  </ul>
</div>
</div>
    
        </div>
        <img onClick={modalShow} className='menu  d-xxl-none ' src={Menu} alt="Menu" />
</nav>
<div className={`RightModal ${open? 'modalOpen':''}`}>
<div className="ModalMenu">
  <i onClick={modalShow} class="uil uil-multiply"></i>
  <form className="  searchForm">
  <i className="uil uil-search"></i> 
      <input className="form-control" type="search" placeholder=" Поиск" aria-label="search"/>
  
    </form>
   
    <ul className="navbar-nav navbarModal">
      <li className="nav-item active">
        <a className="nav-link" href="#Aktsiya">Акции </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Katalog">Каталлог</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#Dastafka">Доставка </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">О магазине</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Blog">Блог</a>
      </li>
      </ul>
  </div>
</div>
</div>
   
  )
}

export default Header