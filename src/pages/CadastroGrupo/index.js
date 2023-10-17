import { useEffect, useState } from 'react'
import Loading from '../../componets/Loading'
import './styles.css'
import Header from '../../componets/Header/index.js'

const CadastroGrupo = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <>
            <div className="container-cad-grupo">
                <Header title={'Cadastro Grupo'} />
                {
                    loading && <Loading />
                }
                <section className='header-grupo'>
                    <div className='container-header'>
                        <h2>Preencha todos os campos abaixo:</h2>
                    </div>
                </section>

                <section className='section-cad-grupo' id='section-address'>
                    <div className='container-form-grupo'>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...'/>
                        </div>
                    </div>
                    <div className='container-form-grupo'>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...'/>
                        </div>
                    </div>
                    <div className='container-form-grupo'>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...'/>
                        </div>
                    </div>
                    <div className='container-form-grupo'>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...'/>
                        </div>
                    </div>
                    <div className='container-form-grupo'>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...'/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CadastroGrupo