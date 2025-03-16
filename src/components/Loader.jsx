import React from 'react'
import style from '../styles/loder.module.css'

function Loder() {
  return (
    <div className={style.back}>
        <span className={style.loader}></span>
    </div>
  )
}

export default Loder