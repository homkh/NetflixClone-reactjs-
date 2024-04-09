import style from './secondSec.module.css'
import image from '../assets/tv.png'
import video from '../assets/vedio.mp4'
export default function SecondSec() {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <div className={style.head}>
          Enjoy on your TV
        </div>
        <div className={style.description}>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </div>
      </div>
      <div className={style.rightSection}>
        <img className={style.tvImg} src={image} alt="tv_images" />
        <video className={style.vedioBg} width="283" height="190" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
