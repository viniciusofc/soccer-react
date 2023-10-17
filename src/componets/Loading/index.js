import loading from '../../assets/loading.svg'
import '../Loading/styles.css'

function Loading() {
    return (
        <div class='loader-container'>
            <img class='loader-img' src={loading} alt='Loading' />
        </div>
    )
}

export default Loading;