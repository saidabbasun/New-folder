import '../../Style/Footer/Footer.scss';
import React from 'react'
import Logo from '../../assets/icon/FooterLogo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="GridItem  container-xl">

       <div>
       <img src={Logo} alt="" />
       </div>
      
          
        <div className="menu ">
     
        <Link className="link" to="/Aktsiya">Акции </Link>
        <Link className="link" to="/Katalog">Каталлог </Link>
        <Link className="link" to="/Dastafka">Доставка </Link>
        <Link className="link" to="/About">O магазине </Link>
        <Link className="link" to="/Blog">Блог </Link>
     
      
        </div>
      <div className="List">
        <ul>
           <Link className="link " to="/"> <li>Популярное</li></Link>
              <Link className="link " to="/"> <li>Книги для детей</li></a>
              <Link className="link " to="/"> <li> Программирование</li></a>
              <Link className="link " to="/"> <li> Психология</li></a>
              <Link className="link " to="/"> <li> Бизнес</li></a>
        </ul>
        <ul>
              <Link className="link " to="/"> <li>  Доставка  </li></a>
              <Link className="link " to="/"> <li>Информация</li></a>
              <Link className="link " to="/"> <li> Оплата</li></a>
              <Link className="link " to="/"> <li>  O магазине</li></a>
           
        </ul>
        <ul>
              <Link className="link " to="/"> <li>Помощь</li></a>
              <Link className="link " to="/"> <li>  Контакты</li></a>
              <Link className="link " to="/"> <li> Возврат товара</li></a>
              <Link className="link " to="/"> <li> Помощь покупателю</li></a>
           
        </ul>
        </div>
        <div className="Tel">
            <p className="TelNumber">
            +38 (071) 339-16-26
            </p>
            <a href="#"><button className='tel_Btn   '>Заказать звонок</button></a>
        </div>
        </div>
        <div className="footerBootomText">
            <p className='Text'>Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ </p>
            <p className='Text'> Условия использования | Политика конфиденциальности</p>
        </div>
    </div>
  )
}

export default Footer