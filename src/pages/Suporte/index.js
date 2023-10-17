import Loading from '../../componets/Loading/index.js'
import '../Suporte/styles.css'
import { useEffect, useState } from 'react'
import suportEmail from '../../assets/supportEmail.svg'

const Suporte = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <>
            <div className="container_home">
                {
                    loading && <Loading />
                }
                <section className='header'>
                    <h2>Suporte</h2>
                </section>
                <section className='section-img'>
                    <img src={suportEmail}></img>
                    <div className='container-support'>
                        <label for="email">E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
                        <label for="text">Dúvidas</label>
                        <textarea className='label-doubt' rows={5} type="text" placeholder="Digite sua dúvida aqui..." />
                        <button>Enviar</button>
                    </div>
                </section>
            </div>
        </>

    )
}


export default Suporte;