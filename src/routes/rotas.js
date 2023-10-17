
import RotasPublicas from './rotasPublicas';
import RotasPrivadas from './rotasPrivadas';

const RoutesApp = () => {
    // const { signed } = useAuth();
    // const userToken = sessionStorage.getItem("tklf");

    return (
        true ? <RotasPrivadas /> : <RotasPublicas />
    )
}

export default RoutesApp;