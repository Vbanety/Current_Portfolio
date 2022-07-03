
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataPlayer } from '../Player/dataPlayer'
import { SidebarData } from '../Navbar/SidebarData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCode } from '@fortawesome/free-solid-svg-icons'
import headerAvatar from '../../../public/assets/headerAvatar.svg'
import './Navbar.css'

import PlayerMusic from '../Player/PlayerMusic'

function Navbar() {
  const [songs, setSongs] = useState(DataPlayer)  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(DataPlayer[0])
  const [sidebar, setSidebar] = useState(false)
  const btnBrRef = useRef(null)
  const btnEnRef = useRef(null)
  const sideBarRef = useRef(null)
  const showSidebar = () => setSidebar(!sidebar)
  const audioElem = useRef()
  const refSidebar = useRef(null)


  useEffect(() => {
    if(isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isPlaying])


  useEffect(() => {
    const navHidden = document.getElementById('navbarZ')
    function handleClickOutSide(event) {
      if (refSidebar.current && !refSidebar.current.contains(event.target)) {
        { setSidebar(false) }
        sideBarRef.current.className !== 'navbar' ? navHidden.classList.add('active') : navHidden.classList.remove('active')
      }


    }

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };

  }, [])


  return (
    <>

      <div id="navbarZ" className={sidebar ? 'navbar active' : 'navbar'} ref={sideBarRef}>
        <Link to="" className="menu-bars">
          <FontAwesomeIcon style={{ color: '#075fe4' }} icon={faBars} onClick={showSidebar} />
        </Link>
         <div className='header_avatar'> {/* will be relative position*/}
          <div className="setLanguages">
            <div className='getPtBr'>
              <input id="pt" type='radio' name='radio' ref={btnBrRef} />
            <span className="iconify brFlag" data-icon="emojione-v1:flag-for-brazil" data-width="28"></span>
            </div>
            <div className='getPtBr'>
            <input id="en" type='radio' name='radio' ref={btnEnRef} />
            <span className="iconify usFlag" data-icon="twemoji:flag-united-states" data-width="28"></span>
            </div>
          </div>
          <FontAwesomeIcon icon={faCode} style={{ color: '#075FE4', fontSize: '32', fontWeight: 'bold' }} />

          <PlayerMusic 
            songs={songs} 
            setSongs={setSongs} 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />

          <img src={headerAvatar} />
        </div>
      </div>
      <nav id='navBar' className={sidebar ? 'nav-menu active' : 'nav-menu'} ref={refSidebar}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="" className="menu-bars" ref={refSidebar}>
              <FontAwesomeIcon color='#075fe4' icon={faClose} />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <div style={{ color: '#075fe4' }}>{item.icon}</div>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
