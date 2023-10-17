import Header from '../../componets/Header/index.js'
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
                <Header title={'Configurar'} />
                {
                    loading && <Loading />
                }
                <section className='header'>

                </section>
            </div>
        </>

    )
}


export default Config;