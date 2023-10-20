import { useEffect, useState } from 'react'
import Loading from '../../componets/Loading'
import './styles.css'
import Header from '../../componets/Header/index.js'
import { SelectCampo } from '../../componets/Select/SelectCampo'
import { SelectDias } from '../../componets/Select/SelectDias'

const CadastroGrupo = () => {
    const [loading, setLoading] = useState(true)
    const [tipoCampo, setTipoCampo] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    const cpfMask = value => {
        return value
          .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
          .replace(/(\d{2})(\d)/, '$1:$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
          .replace(/(\d{2})(\d)/, '$1:$2')
     
      }

    return (
        <>
            <div className="container-cad-grupo">
                <Header title={'Cadastro Grupo'} />
                {
                    loading && <Loading />
                }
                <p>Preencha todos os campos abaixo:</p>
                <section className='header-grupo'>
                    <div className='container-header'>
                        <h2>Nome Grupo / Tipo Campo:</h2>
                    </div>
                </section>

                <section className='section-cad-grupo' id='section-address'>
                    <div>
                        <h4>Nome do seu Grupo</h4>
                        <div className='div-cad-grupo'>
                            <input placeholder='Digite aqui...' />
                        </div>
                    </div>
                    <div>
                        <h4>Tipo de campo</h4>
                        <div className='div-cad-grupo'>
                            <SelectCampo tipo={`campos`} handle={(e) => setTipoCampo(e)} />
                        </div>
                    </div>
                </section>

                <section className='header-grupo'>
                    <div className='container-header'>
                        <h2>Dia da semana / Hora:</h2>
                    </div>
                </section>

                <section className='section-cad-grupo' id='section-address'>
                    <div>
                        <h4>Dia da semana:</h4>
                        <div className='div-cad-grupo'>
                            <SelectDias handle={(e) => setTipoCampo(e)} />
                        </div>
                    </div>
                    <div>
                        <h4>Hora:</h4>
                        <div className='div-cad-grupo'>
                            <input type="text" maxLength={5} value={cpfMask(tipoCampo)} onChange={(e) => setTipoCampo(cpfMask(e.target.value))} placeholder='Digite aqui...'/>
                        </div>
                    </div>
                </section>

                <section className='header-grupo'>
                    <div className='container-header'>
                        <h2>Endereço:</h2>
                    </div>
                </section>

                <section className='section-cad-grupo' id='section-address'>
                    <div>
                        <h4>Dia da semana:</h4>
                        <div className='div-cad-grupo'>
                            <SelectDias handle={(e) => setTipoCampo(e)} />
                        </div>
                    </div>
                    <div>
                        <h4>Hora:</h4>
                        <div className='div-cad-grupo'>
                            <input type="text" maxLength={5} value={cpfMask(tipoCampo)} onChange={(e) => setTipoCampo(cpfMask(e.target.value))} placeholder='Digite aqui...'/>
                        </div>
                    </div>
                </section>
                <div className='div-button'>
                    <button>
                        <span>Criar Grupo</span>
                        <i className="material-symbols-outlined">
                            add_circle
                        </i>
                    </button>

                </div>

            </div>
        </>
    )
}

export default CadastroGrupo