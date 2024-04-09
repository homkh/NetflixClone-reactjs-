import style from './inputfields.module.css';
export default function InputFields() {
  return (
    <div>
      <input className ={style.my_Input} type="text" placeholder='Email address' id='for_email'/>
    </div>
  )
}
