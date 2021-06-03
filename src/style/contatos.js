
import '../style/pages/contatos.css'
import Router from "react-router-dom";
import iconezap from '../style/img/whatsapp.png';
import iconeface from '../style/img/facebook.png';
import iconeinst from '../style/img/instagram.png';
import inconetel from '../style/img/25377.png';
import inconelink from '../style/img/linkedin.png';

function contatos(){
    return(
 
<body id="contatos"> 
<div>
    <h5>lucasmendoncafreitas@outlook.com.br<br/>
    </h5>
    <h6>(62) 98273-4578<br/>
    (62) 98158-7060</h6>
    </div>
    <div><h4>lucasmendoncafreitas</h4>
    </div>
    <div className="face"><h4>Lucas Mendonca</h4>
    </div>
    <div className="link"><h4>linkedin.com/in/lucas-mendonça-731143a2</h4>
    </div>

      <img src={iconezap} className='icone'/>
      <img src={iconeface} className="iconeface1"></img>
      <img src={iconeinst} className='iconeinst'/>
      <img src={inconelink} className='inconelink'/>
      <img src={inconetel} className='inconetel'/>
      
    

</body>
 
        )


}
export default contatos;