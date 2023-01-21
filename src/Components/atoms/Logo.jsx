import Imagen from '../../assets/images/yahir.jpg';

function Logo() {
    return (
        <>
        <div id='logo'>
            <img src={Imagen} alt="Logo del curriculum" className='imagen' />
            </div>
        </>
      );
}

export default Logo;


