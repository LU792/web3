import React from "react";
import Router from "react-router-dom";
import '../style/pages/home.css';
import {Link} from "react-router-dom";
import f1 from '../style/img/f11.jpg';
import f2 from '../style/img/php.jpg';
import f3 from '../style/img/c.jpg';
import f4 from '../style/img/php1.jpg';
import f5 from '../style/img/my-sql.jpg';
import f6 from '../style/img/java.jpg';
import f7 from '../style/img/cc.jpg';
import '../style/pages/carrocel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel  } from 'react-responsive-carousel';

function home (){

    return(
        <aside>
          
          <body >
          <div className="bhom"> 
          
    <div id="titulo">
 <h1>Apresentação Do Desenvolvedor</h1>
    <h2>Apresentação das atribuiçoes e atividades</h2>    
</div>

    <div>
    <ul className="menu">
      <li>
      <Link to="">Home</Link>
        <div className="submenu">
          <h1>HOME</h1>
          <p>adicione suas fotos ou atualize as atuais.</p>
        </div>
      </li>
      <li>
      <Link to="">Sobre</Link>
        <div className="submenu">
          <h1>SOBRE</h1>
          <p>Tudo sobre a empresa e seus processos.</p>
        </div>
      </li>
      <li>
      <Link to="">Currículo</Link>
        <div className="submenu">
          <h1>Currículo</h1>
          <p>Baixar<br></br>Visualisar</p>
        </div>
      </li>
      <li>
        <Link to="ferramentas">Ferramentas</Link>
        <div className="submenu">
          <h1>Ferramentas</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa id est laborum.</p>
        </div>
      </li>
      <li>
      <Link to="contatos">Contato</Link>
        <div className="submenu">
          <h1>CONTATO</h1>
          <p>Todos os meios de contatos da empresa</p>
        </div>
      </li>
    </ul>
    
    <Carousel className="slideshow-container" >
       
       <ul> 
         <li>
            <div className="fade1">
                <img src={f1} />
                <p className="legend">React</p>
            </div>
         </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f2}  />
                <p className="legend">php</p>
            
            </div>
            </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f3}  />
                <p className="legend">C#</p>
            </div>
            </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f4}  />
                <p className="legend">php</p>
            
            </div>
            </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f5}  />
                <p className="legend">My-Sql</p>
            
            </div>
            </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f6}  />
                <p className="legend">JavaScript</p>
            
            </div>
            </li>
            </ul>
            <ul> 
         <li>
            <div className="fade1" >
                <img src={f7}  />
                <p className="legend">C#</p>
            
            </div>
            </li>
            </ul>
        </Carousel>
    
        
</div>
</div>
</body>
</aside>
    )


}
export default home;