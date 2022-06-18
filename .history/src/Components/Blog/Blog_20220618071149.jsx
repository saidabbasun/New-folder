import '../../Style/Blog/Blog.scss';
import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
  
         <div className="container-xl pb-5 mb-5" id='Blog'>
    <div className="title">
        <p>Следите за нами в социальных сетях</p>
    </div>
   
    <div className="Blog">
        <Link to="/"><i className="uil uil-facebook blogIcon "></i></Link>
        <Link to="/"><i  className="uil uil-twitter blogIcon"></i></Link>
        <Link to="/"><i className="uil uil-vk blogIcon "></i></Link>
        <Link to="/"><i className="uil uil-instagram blogIcon "></i></Link>
        <Link to="/"><i className="uil uil-youtube blogIcon"></i></Link>
       
    </div>
 </div>
  )
}

export default Blog