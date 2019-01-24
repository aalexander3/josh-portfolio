import React from 'react'
import '../styles/musicNav.css'

const MusicNav = ({songList, selectedSong, selectSong}) => {
  const renderSongs = () => {
    return songList.map(song => <div key={song} className='song-container'><h1 className='song-title' onClick={() => selectSong(song)} >{song}</h1></div>)
  }

  return (
    <nav className="music-nav">
      {renderSongs()}
    </nav>
  )
}

export default MusicNav
