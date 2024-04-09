import style from './inputFields.module.css';
export default function InputFields(props) {
    return (
        <>
            <input {...props} required='required' className={style.input}/>
            {/* <input type="password" placeholder='Password' id="password" autoComplete='off' /> */}
        </>
    )
}
