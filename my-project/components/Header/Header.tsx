import React, {useState} from 'react'
import style from '../../styles/button.module.css'
import Link from 'next/link'

export default function Header() {  

  return (
    <>
      <div className="bg-[#C5D800] h-16 w-full flex">
        <div className={style.categorytogglelist}>
          <button><a>Home</a></button>
          <button><a>Menü</a></button>
          <p className="text-3xl font-normal">logo</p>
          <button><a>Kontakt</a></button>
          <button><a>Log- / Sign In</a></button>
        </div>        
      </div>
    </>
  )
}
