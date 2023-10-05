import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Repos from '../components/Repos'
import { RepoProps } from '../types/repo'
import styles from '../components/Repos.module.css'

const Repo_Page = ()=> {

    //let id: string = 'Guikipper'

    const [repos, setRepos] = useState<RepoProps[]>([])
    const [items, setItems] = useState<RepoProps[]>([])

    let { id } = useParams()

    const loadRepos = async(id: string)=> {
        const res = await fetch(`https://api.github.com/users/${id}/repos`)
        const data = await res.json()

        
        
        setRepos(data)
        setItems(data)
    }

    const [itensPerPage, setItensPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)
    
    

    const pages = Math.ceil(items.length/itensPerPage)
    const pageArray = Array(pages)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = items.slice(startIndex, endIndex)

    console.log("Testando o CurrentItens: ", currentItens)

    useEffect(() => {
        if (id) {
          loadRepos(id);
        }
      }, [id]);

    return (
        <div className={styles.mainContainer}>

    

        {currentItens.map(element => (
                    <Repos 
                    key={element.id}
                    id={element.id} 
                    name={element.name} 
                    language={element.language}
                    clone_url={element.clone_url}
                    created_at={element.created_at}
                    watchers={element.watchers}
                    />
                ))}

      <div className={styles.div_button_main}>
        {Array.from(pageArray, (_, index) => (
        
          <button className={styles.button_page} 
          key={index}
          value={index} 
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))}
          >
            {index+1}
          </button>

        
            ))}
          </div>
        </div>       
    )
}

export default Repo_Page