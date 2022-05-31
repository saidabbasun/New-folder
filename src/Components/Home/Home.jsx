import React from 'react'
import Header from './Header'
import Slider from '../../assets/img/Слайдер.png'
import '../../Style/Home/Home.scss';
const Home = () => {
  return (
    <div >
      <Header/>
      <div className=" container-xl pb-5 mb-5 Aktsiya " id='Aktsiya'  >
       
      <div className="card">
  <div className="card-body ">
    <h1 className="card-title ">Киниги от  А до Я</h1>
    <p className="card-text">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные сюжеты.</p>
    <a href="#" className="btn">Перейти в каталог</a>
  
</div>
</div>  
        
        <div className=" HomeSlider">
          <img className='HomeSlider' src={Slider} alt="Slider" />
        </div>
      </div>


    </div>
  )
}

export default Home;