import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <>
    <div className={style.navBar}>
        <div className={style.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={style.btn}>
            <button className={style.btnRed}>Sign in</button>
        </div>
    </div> 
    </>
  )
}
