import React from 'react'
import WatchlistChild from './WatchlistChild'
import styles from "../styles/WatchList.module.css"
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
const WatchList = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}><span
      style={{
        display:'flex',
        alignItems:"center"
        
      }}
      ><ArrowRightRoundedIcon
      style={{
        color:"#D01919",
        fontSize:"2.5em"
      }}/>First WatchList</span> <ArrowDropDownRounded  style={{
        color:"#D01919",
        fontSize:"2.5em"
      }}/></div>
      <div className={styles.children}>
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        <WatchlistChild />
        </div>
    </div>
  )
}

export default WatchList