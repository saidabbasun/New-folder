import '../../Style/Blog/Blog.scss';
import React from 'react'

const Blog = () => {
  return (
  
         <div className="container-xl pb-5 mb-5" id='Blog'>
    <div className="title">
        <p>Следите за нами в социальных сетях</p>
    </div>
   
    <div className="Blog">
        <a href="#"><i class="uil uil-facebook blogIcon "></i></a>
        <a href="#"><i class="uil uil-twitter blogIcon"></i></a>
        <a href="#"><i class="uil uil-vk blogIcon"></i></a>
        <a href="#"><i class="uil uil-instagram blogIcon"></i></a>
        <a href="#"><i class="uil uil-youtube blogIcon"></i></a>
    </div>
 </div>
  )
}

export default Blog