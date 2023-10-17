import Loading from '../../componets/Loading/index.js'
import '../Perfil/styles.css'
import { useEffect, useState } from 'react'
import perfil from '../../assets/perfil.jpg'
import toggle from '../../Functions/toggle.js'

const Perfil = () => {
    const [loading, setLoading] = useState(true)
    const [dropDados, setDropDados] = useState()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])


    return (
        <>
            <div className="container_perfil">
                <section className='header'>
                    <h2>Meu Perfil</h2>
                </section>
                {
                    loading && <Loading />
                }
                <section className='section-perfil'>
                    <div className='perfil-circular'>
                        <img src={perfil} alt='logo' />
                    </div>
                    <div>
                        <span>Vinicius Reis Neves</span>
                        <button onClick={() => alert('Editar Perfil...')}>
                            <i class='material-symbols-outlined'>edit</i>
                        </button>
                    </div>

                </section>

                <section className='section-header'>
                    <div className='container-header'>
                        <h2>Meus dados</h2>
                        <button onClick={() => toggle(document.getElementById("section-dados"), document.getElementById("header-i-dados"))}>
                            <i class='material-symbols-outlined' id='header-i-dados'>expand_more</i>
                        </button>
                    </div>
                </section>

                <section className='inactive' id='section-dados'>
                    <div className='container-dados'>
                        <h4>E-mail</h4>
                        <div className='div-dados'>
                            <span>viniciusreisvr74@gmail.com</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>
                    <div className='container-dados'>
                        <h4>CPF</h4>
                        <div className='div-dados'>
                            <span>190.004.237-16</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>
                    <div className='container-dados'>
                        <h4>Celular</h4>
                        <div className='div-dados'>
                            <span>(22) 99999-4455</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>

                </section>

                <section className='section-header'>
                    <div className='container-header'>
                        <h2>Endereço</h2>
                        <button onClick={() => toggle(document.getElementById("section-address"), document.getElementById("header-i-address"))}>
                            <i class='material-symbols-outlined' id='header-i-address'>expand_more</i>
                        </button>
                    </div>
                </section>

                <section className='inactive' id='section-address'>
                    <div className='container-dados'>
                        <h4>Cidade</h4>
                        <div className='div-dados'>
                            <span>Nova Friburgo - RJ</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>
                    <div className='container-dados'>
                        <h4>Logradouro</h4>
                        <div className='div-dados'>
                            <span>Rua Dinamarca</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>
                    <div className='container-dados'>
                        <h4>CEP</h4>
                        <div className='div-dados'>
                            <span>28605-710</span>
                            <button onClick={() => alert('Editar Perfil...')}>
                                <i class='material-symbols-outlined'>edit</i>
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </>

    )
}


export default Perfil;