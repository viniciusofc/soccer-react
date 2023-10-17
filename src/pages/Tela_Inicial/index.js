import Loading from '../../componets/Loading/index.js'
import '../Tela_Inicial/styles.css'
import { useEffect, useState } from 'react'
import Header from '../../componets/Header/index.js'

const TelaInicial = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <>
            <div className="container_perfil">
                <Header title={'Tela Inicial'} />
                {
                    loading && <Loading />
                }
                <section className='section-group'>
                    <div>

                        <button onClick={() => window.location.href = '/cadastrar/grupo'}>
                            <span>Montar Grupo de Futebol </span>
                            <i class='material-symbols-outlined'>arrow_right_alt</i>
                        </button>
                    </div>
                </section>
            </div>
        </>

    )
}


export default TelaInicial;