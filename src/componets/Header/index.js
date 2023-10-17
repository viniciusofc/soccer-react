import './styles.css'
import logo from '../../assets/logo.png'


const Header = ({title}) => {
    return (
        <section className='header'>
            <img src={logo}></img>
            <h2>{title}</h2>
        </section>
    )
}

export default Header;