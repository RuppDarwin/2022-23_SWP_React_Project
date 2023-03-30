import React, {useState} from 'react'
import Link from 'next/link'

export default function Header() {  

  return (
    <>
      <div className="bg-[#C5D800] h-16 w-full flex justify-evenly">
          <button>Home</button>
          <button>Menü</button>
          <button className="font-normal text-3xl">Logo</button>
          <button>Kontakt</button>
          <button>Log- / Sign In</button>
      </div>
    </>
  )
}
