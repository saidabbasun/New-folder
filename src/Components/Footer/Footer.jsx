import '../../Style/Footer/Footer.scss';
import React from 'react'
import Logo from '../../assets/icon/FooterLogo.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="GridItem  container-xl">

       <div>
       <img src={Logo} alt="" />
       </div>
      
          
        <div className="menu ">
     
        <a className="link" href="#">Акции </a>
    
    
        <a className="link" href="#">Каталлог</a>
       
        <a className="link" href="#">Доставка </a>
      
     
        <a className="link" href="#">О магазине</a>
      
    
    
        <a className="link " href="#">Блог</a>
      
        </div>
      <div className="List">
        <ul>
           <a className="link " href="#"> <li>Популярное</li></a>
             <a className="link " href="#"><li>Книги для детей</li></a>
             <a className="link " href="#"><li> Программирование</li></a>
             <a className="link " href="#"><li> Психология</li></a>
             <a className="link " href="#"><li> Бизнес</li></a>
        </ul>
        <ul>
             <a className="link " href="#"><li>  Доставка  </li></a>
             <a className="link " href="#"><li>Информация</li></a>
             <a className="link " href="#"><li> Оплата</li></a>
             <a className="link " href="#"><li>  O магазине</li></a>
           
        </ul>
        <ul>
             <a className="link " href="#"><li>Помощь</li></a>
             <a className="link " href="#"><li>  Контакты</li></a>
             <a className="link " href="#"><li> Возврат товара</li></a>
             <a className="link " href="#"><li> Помощь покупателю</li></a>
           
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