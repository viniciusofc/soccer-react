import { AiOutlineHome } from 'react-icons/ai';
import { GrConfigure } from 'react-icons/gr';
import { MdOutlineContactSupport } from 'react-icons/md';
import './styles.css'
import perfil from '../../assets/perfil.jpg'

const SideBar = () => {

    return (
        <>
            <aside className='sidebar'>
                <header className='sidebar-header'>
                    <img src={perfil} alt='logo' />
                    <span>Olá, Vinicius!</span>
                </header>
                <nav>
                    <button onClick={() => window.location.href = '/home'}>
                        <span>
                            <i class='material-symbols-outlined' >home</i>
                            <span>Tela Inicial</span>
                        </span>
                    </button>
                    <button onClick={() => window.location.href = '/person'}>
                        <span>
                            <i class='material-symbols-outlined' >person</i>
                            <span>Perfil</span>
                        </span>
                    </button>
                    <button onClick={() => window.location.href = '/settings'}>
                        <span>
                            <i class='material-symbols-outlined' >settings</i>
                            <span>Configurar</span>
                        </span>
                    </button>
                    <button onClick={() => window.location.href = '/support'}>
                        <span>
                            <i class='material-symbols-outlined' >call</i>
                            <span>Suporte</span>
                        </span>
                    </button>
                    <button onClick={() => alert('Logout!')}>
                        <span>
                            <i class='material-symbols-outlined' >logout</i>
                            <span>Sair</span>
                        </span>
                    </button>
                </nav>
               
            </aside>

            <nav className='menu-mobile-active'>
                <button>
                    <span>
                        <i class='material-symbols-outlined' > <a href='/person'>person</a></i>
                        <span className='mobile-text'>Perfil</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i class='material-symbols-outlined' ><a href='/settings'>settings</a></i>
                        <span className='mobile-text'>Config</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i class='material-symbols-outlined' ><a href='/home'>home</a></i>
                        <span className='mobile-text'>Tela Inicial</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i class='material-symbols-outlined' ><a href='/support'>call</a></i>
                        <span className='mobile-text'>Suporte</span>
                    </span>
                </button>
                <button>
                    <span onClick={() => alert('Função Sair')}>
                        <i class='material-symbols-outlined' >logout</i>
                        <span className='mobile-text'>Sair</span>
                    </span>
                </button>
            </nav>
        </>

    )
}


export default SideBar;