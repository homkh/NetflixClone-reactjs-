import style from './login.module.css';
import dropMenu from '../assets/drop_down.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import InputFields from '../components/buttons/InputFields';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    // Here is the code for captuers the input fields data
    const [emOrfn, setEmOrfn] = useState('');
    const [password, setPasssword] = useState('');
    const navgation = useNavigate();
    const handelForm = (event) => {
        event.preventDefault();
        // console.log('The forms was submitted......');
        // alert(`The values of email is:- ${emOrfn}`);
        // alert(`Your's password is:- ${password}`);
        // Here is the code for store the data into the local storages data
        if(password.length <= 6 ){
            alert('Password must be at least 6 characters');
        }
        else{
        localStorage.setItem("email", emOrfn);
        localStorage.setItem("password", password);
        navgation('/');
        }
    }
    // const getEmail = localStorage.getItem('email');
    // {
    // Set-Cookie:
    //     name=value;
    //     domain=localhost;
    //     expires=Thu, 16-Jul-2009 21:25:05 GMT;
    //     path=/
    // }
    return (
        <>
            <div className={style.container}>
                <div className={style.overlay}>
                    <div className={style.logoSec}>
                        <Link to='/'><img className={style.logo} src={logo} alt="my_logo" /></Link>
                    </div>
                    <div className={style.loginsec}>
                        <div className={style.logCont}>
                            <div className={style.firstSec}>
                                <h3>Sign In</h3>
                                <form onSubmit={handelForm} action='' id='imp_form'>
                                    <InputFields value={emOrfn ?? 'deafult@gmail.com'} type={'text'} placeholder={'Email or phone number'} onChange={(e) => setEmOrfn(e.target.value)} />
                                    <InputFields value={password ?? 'admin@77'} type='password' placeholder='Password' onChange={(e) => { setPasssword(e.target.value) }} />
                                    {/* <input type="text" placeholder='Email or phone number' id="email" />
                                    <input type="password" placeholder='Password' id="password" autoComplete='off' /> */}
                                    <button className={style.btn} type="submit">Sign in</button>
                                </form>
                                <p>Forgot password?</p>
                                <div>
                                    <div className={style.checkBox}>
                                        <input type="checkbox" id="check" /> <label htmlFor="check">Remember me</label>
                                        <span className={style.helpText}>Need help?</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.secSec}>
                                <span className={style.new}>New to Netflix?</span> <Link to='SIgnupPage' className={style.signUp}><span>Sign up now.</span></Link>
                                <p>This page is protected by Google reCAPTCHA to ensure youre not a bot. <Link to='/'>Learn more.</Link></p>
                            </div>
                        </div>
                    </div>
                    {/* This is an fotter section code */}
                    <div className={style.footer}>
                        <div className={style.fotterCont}>
                            <p>Questions? Contact us.</p>
                            <div className={style.subContainer}>
                                <div>
                                    <p>FAQ</p>
                                    <p>Cookie Preferences</p>
                                </div>
                                <div>
                                    <p>Help Center</p>
                                    <p>Corporate Information </p>
                                </div>
                                <div>
                                    <p>Terms of Use</p>
                                </div>
                                <div>
                                    <p>Privacy</p>
                                </div>
                            </div>
                            <div className={style.dropdown}>
                                <button>English<img src={dropMenu} alt="drop_Menu" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
