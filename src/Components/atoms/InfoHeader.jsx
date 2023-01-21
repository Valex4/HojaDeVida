import {Info} from '../../data/Info'

function InfoHeader() {
    return (  
        <>
        <div id='info'>
            <h1>{Info.nombreCompleto}</h1> 
            <h2>{Info.carrera}</h2>
            </div>
        </>
    );
}

export default InfoHeader;