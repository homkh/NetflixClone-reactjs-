import { Link } from "react-router-dom";
import style from './navbar.module.css';
import logo from './logo.png';
export default function Navbar() {
  return (
    <>
      <div className={style.container}>
        <nav className={style.navcon}>
          <div className={style.logoSec}>
            <Link to='/'><img className={style.logo} src={logo} alt="my_logo" /></Link>
          </div>
          <div className={style.btnSec}>
            <Link to='/sign_in'><button>Sign in</button></Link>
          </div>
        </nav>
      </div>
    </>
  )
}
