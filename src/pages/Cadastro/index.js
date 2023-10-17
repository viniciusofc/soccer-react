import '../Cadastro/css/cadastro.css'
import logo from '../../assets/logo.png'
import ReactInputMask from 'react-input-mask';


const Cadastro = () => {

    return (
        <div class="page_register">
            <div  class="formRegister">
                <h1>Crie sua conta</h1>
                <p>Preencha todos os campos para realizar seu cadastro.</p>
                <label for="name">Nome Completo</label>
                <input type="name" placeholder="Digite seu nome" autofocus="true" />
                <div class="pass_register">
                    <div className='pass_register_block'>
                    <label for="password_confirm">CPF</label>
                         <ReactInputMask
                            mask="999.999.999-99"
                            maskChar="_"
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="999.999.999-99"
                            autofocus="true"
                        />
                    </div>
                    <div className='pass_register_block'>
                    <label for="email">Celular</label>
                        <ReactInputMask
                            mask="(99) 99999-9999"
                            maskChar="_"
                            type="text"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            autofocus="true"
                        />
                    </div>

                </div>
                <label for="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
                <div class="pass_register">
                    <div className='pass_register_block'>
                        <label for="password_confirm">Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                    <div className='pass_register_block'>
                        <label for="password_confirm">Confirmar senha:</label>
                        <input type="password" placeholder="Confirme sua senha" />
                    </div>

                </div>
                <button onClick={() => console.log('Entrei aqui') } class="btn_register"  >Acessar</button>
                <p class='register'>Já tem uma conta? <a href="/login">Acessar</a></p>
            </div>

            <div class="block_register">
                <img  alt='logo' src={logo} />
                <h1>Falta pouco para você se juntar a melhor plataforma de Soccer Manager do Brasil.</h1>
                <p>Estamos anciosos para ter você como parte da nossa família.</p>
            </div>
        </div>
    )
}


export default Cadastro;