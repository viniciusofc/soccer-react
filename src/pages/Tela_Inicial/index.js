import Loading from '../../componets/Loading/index.js'
import '../Tela_Inicial/styles.css'
import { useEffect, useState } from 'react'

const TelaInicial = () => {
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
                    <h2>Tela Inicial</h2>
                </section>
            </div>
        </>

    )
}


export default TelaInicial;