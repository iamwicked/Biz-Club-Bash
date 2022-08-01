import React from 'react'
import WatchlistChild from './WatchlistChild'
import styles from "../styles/WatchList.module.css"
const WatchList = () => {
  return (
    <div className={styles.main}>
        <WatchlistChild />
    </div>
  )
}

export default WatchList