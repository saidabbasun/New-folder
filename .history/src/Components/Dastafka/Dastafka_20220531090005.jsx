import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Dastafka/Dastafka.scss'
const Dastafka = () => {
  return (
    <div className="container-xl pb-5  mb-5" id='Dastafka'>
    <div className="title">
        <p>Доставка</p>
    </div>
    <div className="d_Text">
        <p>Работаем без праздников и выходных! Жители Киева могут получить заказ уже в день его оформления. Клиенты из других городов Украины могут получить заказ в течение 1-5 дней в зависимости от местонахождения населенного пункта и выбранного способа доставки. Заказы на сумму свыше 1000 грн доставляются бесплатно*. Доступные способы, точные сроки и стоимость доставки Вы можете увидеть во время оформления заказа в корзине заказа, после выбора города доставки.


</p>
<Link to="/" className='d_link'>Подробнее</Link>    
    </div>
    </div>
  )
}

export default Dastafka