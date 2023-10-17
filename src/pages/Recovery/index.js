import '../Recovery/css/recovery.css'
import { ReactComponent as ReactLogo } from '../../assets/time.svg';
import logo from '../../assets/logo.png'

const Recovery = () => {
    return (
        <div class="page_recovery">
            <form method="POST" class="formrecovery">
                <div>
                    <img src={logo} />
                </div>

                <h1>Recuperar senha</h1>
                <p>Digite o seu e-mail no campo abaixo.</p>
                <label for="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
                <input type="submit" value="Recuperar" class="btn_recovery" />
                <p class='register_recovery'>Lembrou? <a href="/login">Acessar</a></p>
            </form>
        </div>
    )
}


export default Recovery;