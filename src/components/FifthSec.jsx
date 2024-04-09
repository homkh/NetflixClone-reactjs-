import style from './fifthSec.module.css'
import image from '../assets/kids.png'
export default function Fifthsec() {
  return (
    <>
      <div className={style.container}>
        <div className={style.leftSec}>
            <img className={style.image} src={image} alt="Mobile_image" />
        </div>
        <div className={style.rightSec}>
            <div className={style.title}>
                <p>Create profiles for kids</p>
            </div>
            <div className={style.descritpion}>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>

    </div>
    </>
  )
}
