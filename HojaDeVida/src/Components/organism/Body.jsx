import Caption from "../atoms/Caption";
import '../../assets/styles/Body.css'
import Target from "../atoms/Target";
import {Info} from '../../data/Info'
function Body() {
    return ( 
        <>
        <div id="div1">
        <span id="title"><Caption msn={"Proyectos Personales"}></Caption></span>
        <div className="div2">
        <Target item={Info.project1} text={Info.project1info} id="div3"/>
        <Target item={Info.project2} text={Info.project2info} id="div3"/>
        <Target item={Info.project3} text={Info.project3info} id="div3"/>
        </div>
        </div>
        </>
     );
}

export default Body;