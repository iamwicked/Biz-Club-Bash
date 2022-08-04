import React, { useState } from 'react'
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import styles from "../styles/WatchList.module.css"
const WatchlistChild = () => {
    const [active, setActive] = useState(false)
  return (
    <div className={styles.main_child}>
        <div className={styles.stock_dets} onClick={()=>setActive(!active)}>
        <div className={styles.left}>
        Stock Name
        </div>
        <div className={styles.right}>
        <span>330.30</span> <br />
        <span>4.25 (1.30%) <span><NavigationRoundedIcon /></span></span>
        </div>
        </div>
        <div className={styles.btns} id={active ? styles.active : ""}>
        <button style={{
            background:"#1D1AB9",
            marginRight:'10%'
        }}>
            Buy
        </button>
        <button 
        style={{
            background:"#F35454"
        }}
        >
            Sell
        </button>
        </div>
    </div>
  )
}

export default WatchlistChild