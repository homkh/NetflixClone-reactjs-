import style from './faqButton.module.css'
import imgage from '../assets/white.png'
export default function Faqbutton(props) {
  return (
    <>
    <div className={style.btnContainer}>
        <div className={style.heading}>{props.title}</div>
        <div><img className={style.plushimg} src={imgage} alt="logo_crush" /></div>
    </div>
      
    </>
  )
}
