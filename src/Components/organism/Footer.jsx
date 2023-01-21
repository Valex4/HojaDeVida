import Caption from "../atoms/Caption";
import Target from "../atoms/Target";
import Target2 from "../atoms/Target2";
import "../../assets/styles/Footer.css";
import {Info} from '../../data/Info.js'
import cmas from '../../assets/images/c++.png';
import css from '../../assets/images/css.png';
import html from '../../assets/images/html.png';
import java from '../../assets/images/java.png';
import js from '../../assets/images/javascript-logo.svg';
import mysql from '../../assets/images/mysql.png';
import nodejs from '../../assets/images/nodejs.png';

function Footer() {
  return (
    <>
      <span id="title">
        <Caption msn={"Acerca de mi"} />
      </span>
      <div id="all">
        <div id="izquierda">
          <Target2 item={Info.subtitulo1} list={Info.skills} id="izquierda"/>
         { /*<Target item={Info.subtitulo1} text={Info.texto1} id="izquierda" />*/}
        </div>
        <div id="derecha">
          <div id="doble">
            <div id="div5">
              <div id="div6"><Caption msn={Info.subtitulo2}></Caption></div>
             
              <img src={cmas} width="60px"/>
              <img src={css} width="50px"/>
              <img src={html} width="70px"/>
              <img src={java} width="80px"/>
              <img src={js} width="90px"/>
              <img src={mysql} width="100px"/>
              <img src={nodejs} width="100px"/>
            </div>
          {/* <Target2 item={Info.subtitulo2} list={Info.certificaciones} id="div4"/> */}
          <Target2 item={Info.subtitulo3} list={Info.certificaciones} id="div4"/>
          </div>
          <Target2 item={Info.subtitulo4} list={Info.contacto} id="div4"/>
         {/*  <Target item={Info.subtitulo4} text={Info.texto4} id="div4" /> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
