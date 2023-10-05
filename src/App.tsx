import {Outlet} from 'react-router-dom'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
        <h1>GitHub Finder</h1>
        <Outlet/> {/* Outlet é necessário para o roteamento de páginas */}
    </div>
  )
}

export default App
