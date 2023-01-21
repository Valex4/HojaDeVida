import Logo from '../atoms/Logo';
import '../../assets/styles/Header.css'
import InfoHeader from '../atoms/InfoHeader';
function Header(){

    return(
        <header>
            <Logo/>
            <InfoHeader/>
        </header>
    )
}

export default Header;