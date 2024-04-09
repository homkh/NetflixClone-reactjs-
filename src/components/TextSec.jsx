import style from './textSec.module.css'
import Button from './Button'
import InputFields from './InputFields.jsx'
import { Link } from 'react-router-dom'
export default function TextSec() {
    return (
        <>
            <div className={style.container}>
                <div className={style.textSec}>
                    <div className={style.heading}>
                        <h1>Unlimited movies, TV shows, and more</h1>
                    </div>
                    <div className={style.heading2}>
                        <p>Watch anywhere. Cancel anytime.</p>
                    </div>
                    <div className={style.heading2}>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                </div>
                <div className={style.inputSec}>
                    <InputFields />
                    <Button btnText="Get Started" />
                </div>
                <div className={style.watchNow}>
                    <Link to='/moviesec'><button type="button"> Watch Now </button></Link>
                </div>
            </div>
        </>
    )
}
