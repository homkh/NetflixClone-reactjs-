import React from 'react'
import style from './button.module.css'
import icon from '../assets/more.png'
function Button(props) {
  return (
    <div className={style.btn}>
      <button>
        <div className={style.text}>
        {props.btnText}
        </div>
        <div className={style.icon}>
          <img src={icon} alt="Icon_loading" />
        </div>
      </button>
    </div>
  )
}

export default Button
