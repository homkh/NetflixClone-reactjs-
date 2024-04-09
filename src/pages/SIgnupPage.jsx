import style from './signupPage.module.css';
import InputFields from '../components/buttons/InputFields';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function SIgnupPage() {
  // From here started a handels forms code
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [conformPass, setConpass] = useState('');
  const submite = (event) => {
    event.preventDefault();
    console.log("The value was sucessfully subimitted......")
    localStorage.setItem('FirstName', fName);
    localStorage.setItem('lastName', lName);
    localStorage.setItem('Email', email);
    if (password.length <= 6) {
      alert('Password must be at least 6 characters..')
    }
    else if (password === conformPass) {
      localStorage.setItem('Password', password);
      localStorage.setItem('Con_Password', conformPass);
    }
    else {
      alert('Please check the password and re-enter password values!!')
    }
  }

  return (
    <div className={style.bgcontainer}>
      <div className={style.contMain}>
        <div className={style.textBox}>
          <h2>Sign Up Now!</h2>
          <form onSubmit={submite} action='' id="sing_Up">
            <InputFields type={'text'} placeholder={'First Name'} onChange={(e) => setFname(e.target.value)} />
            <InputFields type={'text'} placeholder={'Last Name'} onChange={(e) => setLname(e.target.value)} />
            <InputFields type={'email'} placeholder={'Email@'} onChange={(e) => setEmail(e.target.value)} />
            <InputFields type={'password'} placeholder={'Password'} onChange={(e) => setPasword(e.target.value)} />
            <InputFields type={'password'} placeholder={'Confirm Password'} onChange={(e) => setConpass(e.target.value)} />
            <div><input type="checkbox" /> I accept the Terms of Use & Privacy Policy</div>
            <button type="submit" className={style.btn47}>Sign Up</button>
          </form>
          <p>Already have an account?<Link to='/sign_in'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SIgnupPage
