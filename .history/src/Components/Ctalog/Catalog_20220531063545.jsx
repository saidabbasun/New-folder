import React from 'react'
  import '../../Style/Catalog/Catalog.scss';
const Catalog = () => {

 const  listItem=['Книги','Электронные книги','Аудиокниги','Игрушки, творчество','Книжные аксессуарые','Книжные аксессуарые','Настольные игрые','Подарки','Акции']
  return (
    <div className=' container-xl pb-5  mb-5' id='Katalog'>
        <div className="title   pt-5">
            <p>Каталог</p>
        </div>
        <div className="CatalogWrapper" >
          {listItem.map((text,ind)=>(
      
     <a key={ind}   className='Button ' href="#"> <span className='btnText'>{text} </span></a>
      
 

          ))}
          </div>
        </div>
   
  )
}

export default Catalog