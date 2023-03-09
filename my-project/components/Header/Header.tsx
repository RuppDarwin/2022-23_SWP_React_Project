import React, {useState} from 'react'
import style from '../../styles/button.module.css'

export default function Header() {
  const [changeclass, setchangeclass] = useState(false);

  function handleClick(){
    setchangeclass(changeclass => !changeclass);
  }

  let toggleClassCheck = changeclass ? ' active' : 'disabled';

  return (
    <>
      <div className="bg-[#C5D800] h-16 w-full flex">
        <div className={style.categorytogglelist}>
          <button onClick={handleClick} className={toggleClassCheck}><a>Home</a></button>
          <button onClick={handleClick} className={toggleClassCheck}><a>Menü</a></button>
          <p>logo</p>
          <button onClick={handleClick} className={toggleClassCheck}><a>Kontakt</a></button>
          <button onClick={handleClick} className={toggleClassCheck}><a>Log- / Sign In</a></button>
        </div>        
      </div>
      <div> 
      </div>
    </>
  )
}
