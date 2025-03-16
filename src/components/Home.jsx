import React from 'react'
import style from '../styles/home.module.css'

function Home() {
  return (
    <>
      <div className={style.img}>
        <div className={`${style.window} ${style.windowUp}`}>
            <div className={style.greet}>Assalomu aleykum</div>
        </div>
      </div>
      
    </>
  )
}

export default Home