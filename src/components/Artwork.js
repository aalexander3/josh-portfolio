import React from 'react'

const Artwork = ({ artwork }) => {
  const imageOrVideo = () => {
    let image = /\.jpg/
    let video = /\.mp4/
    if (artwork.match(image)) {
      return <img className='artwork' src={require(`../assets/images/${artwork}`)} alt={artwork}/>
    } else if (artwork.match(video)) {
      return (
        <video className='artwork'>
            <source src={require(`../assets/images/${artwork}`)} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
      )
    }
  }

  const playVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.play()
    }
  }

  const pauseVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.pause()
    }
  }

  return (
    <div className='art-container' onMouseOver={playVideo} onMouseOut={pauseVideo}>
      {imageOrVideo()}
    </div>
  )
}

export default Artwork
