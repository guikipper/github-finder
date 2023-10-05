import { RepoProps } from '../types/repo.ts'
import styles from '../components/Repos.module.css'
import {Link} from 'react-router-dom'

function Repos({id, name, language, clone_url, created_at, watchers}: RepoProps) {
    return (
            <div className={styles.repo}>
                <h2>Nome: {name}</h2>
                <p>ID: {id}</p>
                <p>Linguagem: {language}</p>
                <p>Criado em: {created_at}</p>
                <p>Visualizadores: {watchers}</p>
                <p className={styles.link}>
                    <span className={styles.text_span}>
                    Link:
                    </span>
                    <Link to={clone_url} target="_blank" style={{ color: '#7f8fce' }}> {clone_url}</Link>
                </p>
            </div>
        
    )
}

export default Repos