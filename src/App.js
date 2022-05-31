import Home from "./Components/Home/Home.jsx"
import Catagory from './Components/Home/Catagory';
import './Style/Globl/_globl.scss'
import Aktsiya from "./Components/Aktsiya/Aktsiya.jsx";
import Catalog from "./Components/Ctalog/Catalog.jsx";
import About from "./Components/About/About.jsx";
import Dastafka from "./Components/Dastafka/Dastafka.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div>
    <Home/>
    <Catagory/>
    <Aktsiya/>
    <Catalog/>
    <About/>
    <Dastafka/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
