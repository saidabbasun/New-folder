
import Slider from "react-slick";
import React, { Component } from "react";
import Book2 from "../../assets/img/image 2.png";
import Book3 from "../../assets/img/image 3.png";
import Book4 from "../../assets/img/image 4.png";
import Book5 from "../../assets/img/image 5.png";
import Book6 from "../../assets/img/image 6.png";
import "../../Style/Home/Catagory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carusel extends Component {
  
    state = {
      slideIndex: 0,
      updateCount: 0,
    };

 
    render() {
     const listItem=[
        {id:1, img: Book2 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:2, img: Book3 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:3, img: Book4 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:4, img: Book5 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:5, img: Book6 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:6, img: Book2 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:7, img: Book3 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:8, img: Book4 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
        {id:9, img: Book5 , title:"300 грн",bookName:"Порядок в Хаосе",text:"ПКонстантин Коптелов"},
      ]
      const settings = {
        dots: false,
  
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
  
        afterChange: () =>
          this.setState((state) => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => this.setState({ slideIndex: next }),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5 ,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint:992 ,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
        ],
      };

      return (
<div>
<div className="cardWrapper">
            <Slider
              className="Slider"
              ref={(slider) => (this.slider = slider)}
              id="Card"
              {...settings}
            >
         {listItem.map((data,ind)=>(
                <div key={ind} class="card Catagorycard">
                <img className="card-img-top p-4" src={data.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title ">{data.title}</h5>
                  <p className="bookName mb-0 fw-bold"> {data.bookName}</p>
                  <p className="card-text ">{data.text} </p>
                  <div className="d-flex align-items-center">
                    <a   href="#" className="btn  rounded m-2">
                      В корзину
                    </a>
                    <i className="uil uil-heart"></i>
                  </div>
                </div>
              </div>
         ))}
            </Slider>
            <div className="scrollInput">
              <input
                onChange={(e) => this.slider.slickGoTo(e.target.value)}
                value={this.state.slideIndex}
                type="range"
                min={0}
                max={listItem.length-1}
              />
            </div>
         </div>
       </div>
      );
    }
  }