import './styles.css'

const ModalCadastroGrupo = ({ visibleModalCadastroGrupo }) => {
    return (
        <>
            {
                visibleModalCadastroGrupo &&
                <section className='section-modal-grupo'>
                    <div>
                        <span>Modal Cadastro</span>
                    </div>
                </section>
            }
        </>

    )
}
export default ModalCadastroGrupo