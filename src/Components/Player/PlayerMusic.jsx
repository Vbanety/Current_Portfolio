import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle,  faBackwardStep, faForwardStep,  faClose, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function PlayerMusic({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs}) {

  const [showPlayer, setShowPlayer] = useState(true)

  const clickRef = useRef()
  const playerRef = useRef()
  const refPlayer = useRef(null)
  
  const handleOpenPlayer = () => {
    setShowPlayer(false)
  }

  useEffect(() => {
    const playHidden = document.getElementById('idPlayer')
    function handleClickOutSidePlayer(event) {
      if (playerRef.current && !playerRef.current.contains(event.target)) {
        { setShowPlayer(!false) }
        refPlayer.current.className !== 'hiddenPlayer' ? playHidden.classList.remove('active') : playHidden.classList.add('active')
        console.log(playerRef.current.className)
      }
    }

    document.addEventListener("mousedown", handleClickOutSidePlayer);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSidePlayer);
    };

  }, [])


  const handleClosePlayer = () => {
    setShowPlayer(true)
  }

  const playPause = () => {
    setIsPlaying(!isPlaying)
  }

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({ ...currentSong, 'progress':ct /duration * 100, 'length': duration })
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length

  }

  const skipBack = () => {

    const index = songs.findIndex(x => x.title === currentSong.title)
    if(index === 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[index - 1])
    }

    audioElem.current.currentTime = 0;
  }

  const skipNext = () => {

    const index = songs.findIndex(x => x.title === currentSong.title)
    if(index === songs.length - 1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[index + 1])
    }

    audioElem.current.currentTime = 0;
  }

  return (
    <>
      <FontAwesomeIcon
        onClick={() => handleOpenPlayer()}
        className='btn_player'
        fontSize={15}
        icon={faMusic}
        title="Click aqui para ouvir uma musica enquanto navega no meu site."
        ref={refPlayer}
      />
      <div id="idPlayer" key={currentSong.index} className={!showPlayer ? 'hiddenPlayer active' : 'hiddenPlayer'} ref={playerRef}>
        <p>{currentSong.title} <FontAwesomeIcon className='closePlayer' onClick={() => handleClosePlayer()} icon={faClose} /></p>
        <b>{currentSong.author}</b>
        <img src={currentSong.picture}/>
        <div onClick={checkWidth} style={{width: '100%'}}>
          <div className="progress" style={{width: `${currentSong.progress+"%"}`}} ref={clickRef}></div>
        </div>
        <audio src={currentSong.player} ref={audioElem} onTimeUpdate={onPlaying} />
        <div className="btn_search">
          <FontAwesomeIcon icon={faBackwardStep} onClick={skipBack}/>
          {isPlaying ? <FontAwesomeIcon icon={faPauseCircle} onClick={playPause}/> : <FontAwesomeIcon icon={faPlayCircle} onClick={playPause}/>}
          <FontAwesomeIcon icon={faForwardStep} onClick={skipNext}/>
        </div>
        
      </div>
    </>
  )
}