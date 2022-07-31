import React from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styles from "../styles/NavBar.module.css"
import Link from 'next/link';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BiBell } from "react-icons/bi";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.nav_left}>
   <div> Nifty Small Cap</div>
   <div>4205.90</div>
   <div
   style={{
    display:'flex',
    alignItems:'center',
    color:'#797979'
   }}
   >+0.00(0.00%) <span><ArrowDropDownRoundedIcon
   style={{
   color:'red',
   marginTop:"0.2em",
   fontSize:'2.5em',

   }}
   /></span></div>
        </div>
        <div className={styles.nav_right}>
<div className={styles.nav_logo}>
logo
</div>
<div className={styles.nav_links}>
    <ul>
       <li><Link href="\">
      <a>Home</a>
       </Link></li>
       <li><Link href="\">
      <a>Market</a>
       </Link></li>
       <li><Link href="\">
      <a>Watchlist</a>
       </Link></li>
       <li><Link href="\">
      <a>Portfolio</a>
       </Link></li>
       <li><Link href="\">
      <a>Positions</a>
       </Link></li>
       <li><Link href="\">
      <a>Orders</a>
       </Link></li>
       <li><Link href="\">
      <a>Money</a>
       </Link></li>
    </ul>
</div>
<div className={styles.nav_user}>
    <BiBell 
    style={{
        fontSize:"1.3rem"
    }}
    />
    <span>Hi <span style={{
        fontWeight:"bold"
    }}>user</span></span>
<Avatar />
</div>
        </div>

    </nav>
  )
}

export default NavBar