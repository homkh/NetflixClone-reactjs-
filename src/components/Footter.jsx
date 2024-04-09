import style from './footer.module.css'
export default function Fotter() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topSection}>
                    <p>Questions? Contact us.</p>
                </div>
                <div className={style.buttomSection}>
                    <div className={style.first}>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Speed Test</a></li>
                        </ul>
                    </div>
                    <div className={style.second}>
                    <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Cookie Prefernces</a></li>
                            <li><a href="#">Legal Notices</a></li>
                        </ul>
                    </div>
            
                    <div className={style.third}>
                    <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Way to Watch</a></li>
                            <li><a href="#">Corporate Information</a></li>
                            <li><a href="#">Only On Netflix</a></li>
                    </ul>
                    </div>
                    <div className={style.forth}>
                    <ul>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Term of Use</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                </div>

                <div className={style.btn}>
                    <button>English</button>
                </div>
                <div>
                    <p>Netflix Nepal</p>
                </div>
            </div>
        </>
    )
}
