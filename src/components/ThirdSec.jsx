import style from './thirdSec.module.css'
import image from '../assets/mobile.jpg'
export default function Thirdsec() {
  return (
    <>
    <div className={style.container}>
        <div className={style.leftSec}>
            <img className={style.image} src={image} alt="Mobile_image" />
        </div>
        <div className={style.rightSec}>
            <div className={style.title}>
                <p>Download your shows to watch offline</p>
            </div>
            <div className={style.descritpion}>
                <p>Save your favorites easily and always have something to watch.</p>
            </div>
        </div>

    </div>
      
    </>
  )
}

