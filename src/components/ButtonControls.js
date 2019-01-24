import React, { Fragment } from 'react'
import '../styles/buttonControls.css'

const ButtonControls = ({ checkPause, playTrack, pauseTrack, selectedSong }) => {
  console.log(checkPause());

  const renderControls = () => {
    return (
      <Fragment>
        <h3>{selectedSong} </h3>
        <img className="button" src="/play-button.svg" alt="play button" onClick={playTrack} />
        <img className="button" src="/pause.svg" alt="pause button" onClick={pauseTrack} />
      </Fragment>
    )
  }

  return (
    <div className="button-control">
      {selectedSong && renderControls()}
    </div>
  )
}

export default ButtonControls
