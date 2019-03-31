import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/buttonControls.css'

const ButtonControls = ({ paused, playTrack, pauseTrack, selectedSong, currentTime, duration, color }) => {

  const formatDuration = () => {
    if (duration){
      const minutes = Math.floor(duration / 60)
      const seconds = Math.round(duration - (minutes * 60))
      if (seconds < 10) {
        return `${minutes}:0${seconds}`
      } else if (seconds === 60) {
        return `${minutes}:00`
      } else  {
        return `${minutes+1}:${seconds}`
      }
    } else {
      return `0:00`
    }
  }

  const formatCurrent = () => {
    if (currentTime) {
      const minutes = Math.floor(currentTime / 60)
      const seconds = Math.round(currentTime - (minutes * 60))
      if (seconds < 10) {
        return `${minutes}:0${seconds}`
      } else if (seconds === 60) {
        return `${minutes+1}:00`
      } else {
        return `${minutes}:${seconds}`
      }
    } else {
      return `0:00`
    }
  }

  const renderControls = () => {
    return (
        <div className="song-controls">
          <div className="title">
            <h3> {selectedSong} </h3>
          </div>
          <div className='buttons'>
            { paused ?
              <img className="button" src="/play-button.svg" alt="play button" onClick={playTrack} /> :
              <img className="button" src="/pause.svg" alt="pause button" onClick={pauseTrack} />
            }
          </div>
          { <div className='progress-bar'>{`${formatCurrent()} / ${formatDuration()}`} </div> }
        </div>
    )
  }

  return (
    <div className="button-control">
      <NavLink exact to='/' className={`nav-link ${color}`} ><h3>Music</h3></NavLink>
      <NavLink exact to="/artwork" className={`nav-link ${color}`} ><h3>Art</h3></NavLink>
      <NavLink exact to="/media" className={`nav-link ${color}`} ><h3>Media</h3></NavLink>
      <NavLink exact to="/gallery" className={`nav-link ${color}`} ><h3>Gallery</h3></NavLink>
      {selectedSong && renderControls()}
    </div>
  )
}

export default ButtonControls
