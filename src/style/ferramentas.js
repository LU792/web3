import React from "react";
import '../style/pages/post.css'

 


  
  
  function ferramentas() {

    return(

<html>
  <body >
<div className="ferra"></div>

  <div className="container">
   
    <input type="radio" name="radio" id="radio-nav-1"  />
    <span>HTML 5</span>
    <input type="radio" name="radio" id="radio-nav-2" />
    <span>CSS 3</span>
    <input type="radio" name="radio" id="radio-nav-3" />
    <span>LESS</span>
    <input type="radio" name="radio" id="radio-nav-4" />
    <span>SASS</span>
    <input type="radio" name="radio" id="radio-nav-5" />
    <span>jQuery</span>

    
    <div className="scroll">
      <section className="section" id="section-1">
        <div className="logo">
          <span>HTML 5</span>
        </div>
        <h2>HTML 5</h2>
        <p>
          HTML5 é a mais recente evolução do padrão que define o HTML. O termo representa dois conceitos diferentes: 
          É uma nova versão da linguagem HTML, com novos elementos, atributos, e comportamentos. e um conjunto maior de 
          tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos.
        </p>
      </section>

      <section className="section" id="section-2">
        <div className="logo">
          <span>CSS 3</span>
        </div>
        <h2>CSS 3</h2>
        <p>
          CSS3 é a terceira versão principal da linguagem principal da World Wide Web, geralmente usada em combinação com o HTML5.
          O desenvolvimento do CSS3 começou em 2005 em contraste com outras especificações e modularização. Os módulos CSS3 são descritos 
          em especificações separadas, como Seletores, Consultas de Mídia, Texto, Fundos, Cores, Transformações 2D e 3D, Transições, 
          Animações e Multi-Colunas.
        </p>
      </section>

      <section className="section" id="section-3">
        <div className="logo">
          <span>LESS</span>
        </div>
        <h2>LESS</h2>
        <p>
          A linguagem dinâmica de estilos.
          LESS estende CSS com comportamento dinâmico como variáveis, mixins, operações e funções. LESS roda tanto no cliente 
          (Chrome, Safari, Firefox) quanto no servidor, usando Node.js e Rhino.
        </p>
      </section>

      <section className="section" id="section-4">
        <div className="logo">
          <span>SASS</span>
        </div>
        <h2>SASS</h2>
        <p>
          Sobre Sass. Esta é forma como Sass se auto-descreve na sua própria documentação: Sass é uma extensão de CSS que adiciona 
          novas possibilidades e elegância à linguagem base. O objectivo final de Sass é corrigir as falhas de CSS.
        </p>
      </section>

      <section className="section" id="section-5">
        <div className="logo">
          <span>jQuery</span>
        </div>
        <h2>jQuery</h2>
        <p>
          jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts 
          interpretados no navegador do cliente.
        </p>
      </section>
    </div>
  </div>
  </body>
  </html>
    );
}
export default ferramentas;