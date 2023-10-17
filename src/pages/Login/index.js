import '../Login/css/login.css'
import { ReactComponent as ReactLogo } from '../../assets/time.svg';
import logo from '../../assets/logo.png'

const Login = () => {
    
    return (
        <div class="page_login">
            <div class="block_login">
                <h1>FAÇA SEU LOGIN NA PLATAFORMA.</h1>
                <img src={logo}></img>
                {/* <ReactLogo class="reactLogo" /> */}
            </div>
            <form method="POST" class="formLogin">
                <h1>Login</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label for="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
                <label for="password">Senha</label>
                <input type="password" placeholder="Digite sua senha" />
                <a href="/recovery">Esqueci minha senha</a>
                <input type="submit" value="Acessar" class="btn_login" />
                <p class='register_login'>Não tem uma conta? <a href="/cadastro">Registre-se</a></p>
            </form>
        </div>
    )
}


export default Login;