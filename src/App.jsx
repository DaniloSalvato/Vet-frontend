import styles from "./styles/global.module.css"
//  import Home from "./pages/Home/index.jsx"
import Login from "./components/Login/index.jsx"




export default function App(){
  return(
    <div className={styles.app}>
      <Login />
    </div>
    
  )
}