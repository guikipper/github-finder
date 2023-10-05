type SearchProps = {
    loadUser: (userName: string) => Promise<void>; //o tipo SearchProps é uma função, que recebe um username, do tipo strin
                                                    // e retorna uma promise void
}
import styles from './Search.module.css'
import { useState, KeyboardEvent } from 'react'; //pra saber oq o usuário digitou no campo de busca
import {BsSearch} from 'react-icons/bs'

function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

    return (
        <div className={styles.container_main}>
            <div className={styles.search}>
                <h2>Busque por usuário:</h2>
                <p>Conheça seus repositórios</p>
                <div className={styles.search_container}>
                    <input type="text" 
                    placeholder="Digite o nome do usuário" 
                    onChange={(e)=> setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                    <button onClick={() => loadUser(userName)}>
                        <BsSearch/>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Search