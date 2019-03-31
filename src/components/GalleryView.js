import React, { Component } from 'react'
import '../styles/gallery.css'

class GalleryView extends Component {

  state = {
    currentArtwork: 0,
    left: false,
  }

  imageOrVideo = (artwork) => {
    let image = /\.jpg/
    let video = /\.mp4/
    if (artwork.match(image)) {
      return <img className='gallery-work' src={require(`../assets/images/${artwork}`)} alt={artwork}/>
    } else if (artwork.match(video)) {
      return (
        <video className='gallery-work' onMouseOver={this.playVideo} onMouseOut={this.pauseVideo} >
            <source src={require(`../assets/images/${artwork}`)} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
      )
    }
  }

  playVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.play()
    }
  }

  pauseVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.pause()
    }
  }

  trackMouse = e => {
    let switchPoint = e.target.offsetWidth / 2
    if (e.screenX - 100 > switchPoint) {
      if (this.state.left) {
        this.setState({ left: false })
      }
    } else {
      if (!this.state.left) {
        this.setState({ left: true })
      }
    }
  }

  triggerCarousel = () => {
    this.state.left ? this.prevArt() : this.nextArt()
  }

  nextArt = () => {
    const { currentArtwork } = this.state
    const { artworks } = this.props

    if (currentArtwork < artworks.length-1) {
      this.setState({currentArtwork: currentArtwork + 1})
    }
  }

  prevArt = () => {
    const { currentArtwork } = this.state
    const { artworks } = this.props

    if (currentArtwork > 0) {
      this.setState({currentArtwork: currentArtwork - 1})
    }
  }

  getCurrentImage = () => {
    const { currentArtwork } = this.state
    const { artworks } = this.props

    return this.imageOrVideo(artworks[currentArtwork])
  }

  render(){
    return (
      <div className={this.state.left ? 'gallery left' : 'gallery' } onMouseMove={this.trackMouse} onClick={this.triggerCarousel} >
        {this.getCurrentImage()}
      </div>
    )
  }
}

export default GalleryView
