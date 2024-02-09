import React from 'react'
import "./Header.css";
import Button from '../Button/Button';
import TemporaryDrawer from './Drawer';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span style={{color:"var(--blue"}}>.</span>
        </h1>
        <div className="links">
          <p className="link">Home</p>
          <p className="link">Compare</p>
          <p className="link">Watchlist</p>
          <Button text={"Dashboard"} onClick={()=>console.log("clicked")}></Button>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer/>
      </div>
    </div>
    </>
    
  )
}

export default Header