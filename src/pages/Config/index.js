import Loading from '../../componets/Loading/index.js'
import '../Config/styles.css'
import { useEffect, useState } from 'react'

const Config = () => {
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
                    <h2>Configurar</h2>
                </section>
            </div>
        </>

    )
}


export default Config;