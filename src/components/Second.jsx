// import image from '../assets/tv.png'
import video from '../assets/vedio.mp4'
import './second.css'
export default function Second() {
  return (
    <div>
       <section className="first">
        <div>
            <span>Watch everywhere</span>
            <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
        </div>

        <div className="secImg">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
            <video controls autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    </section>
    </div>
  )
}
