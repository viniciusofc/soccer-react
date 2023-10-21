import { useEffect, useState } from 'react'
import Loading from '../../componets/Loading'
import './styles.css'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

import UseForm from '../../componets/Form/UseForm/UseForm'
import ReviewForm from '../../componets/Form/UseForm/ReviewForm'
import Thanks from '../../componets/Form/UseForm/Thanks'

import { useForm } from '../../hooks/useForm';

import Steps from '../../componets/Steps'
import Header from '../../componets/Header';

const formData = {
    name: '',
    tipo: '',
    dia: '',
    horaInicial: '',
    horaFinal: ''

}

const CadastroGrupo = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(formData);

    const updateFielHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const formComponents = [
        <UseForm data={data} updateFielHandler={updateFielHandler} />, <ReviewForm data={data} updateFielHandler={updateFielHandler} />, <Thanks data={data} />
    ]

    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    function handleRegister() {
        if (!(data.tipo)) {
            alert('Dados incompletos!')
        }
    }

    return (
        <>
            <Header title={'Meu Perfil'} />
            {
                loading && <Loading />
            }
            <div className='container_cad-group'>

                <div className='header-cad-group'>
                    <h2>Crie seu Grupo </h2>
                    <p>Após seguir todos os passos, seu grupo estará formado!</p>
                </div>
                <section>
                    <div className='form-container-cad-group'>
                        <Steps currentStep={currentStep} />
                        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                            <div className='inputs-container-cad-group'>
                                {currentComponent}
                            </div>
                            <div className='actions'>
                                {
                                    !isFirstStep &&
                                    (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                                        <GrFormPrevious />
                                        <span>Voltar</span>
                                    </button>)
                                }

                                {!isLastStep ? (
                                    <button type='submit'>
                                        <span>Avançar</span>
                                        <GrFormNext />
                                    </button>
                                ) : (<button type='button' onClick={() => handleRegister()}>
                                    <span>Enviar</span>
                                    <FiSend />
                                </button>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CadastroGrupo