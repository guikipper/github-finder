import loading from '../img/loading.svg'
import styles from '../components/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loading} alt="Loading"/>
        </div>
    )
}

export default Loading