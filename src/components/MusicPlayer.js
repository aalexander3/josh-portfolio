import React, { Component } from 'react'
import ButtonControls from './ButtonControls'
import noticed from './../assets/music/Noticed.wav'
import makeYouSmile from './../assets/music/Make You Smile.wav'
import skinnedKnees from './../assets/music/Skinned Knees.wav'
import sweetCherie from './../assets/music/Sweet Cherie.wav'
import wwcl from './../assets/music/What We Call Love.wav'
import wyg from "./../assets/music/Where'd You Go.wav"

import '../styles/musicPlayer.css'

const musicMap = {
  "Noticed": noticed,
  "Make You Smile": makeYouSmile,
  "Skinned Knees": skinnedKnees,
  "Sweet Cherie": sweetCherie,
  "What We Call Love": wwcl,
  "Where'd You Go": wyg
}

class MusicPlayer extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.interval = 0

    this.state = {
      player: false,
      paused: true,
      currentTime: 0
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spacePressed)
  }

  componentDidUpdate(prevProps){
    if (prevProps.selectedSong !== this.props.selectedSong) {

      const { current } = this.myRef
      current.src = musicMap[this.props.selectedSong]

      this.setState({
        player: current,
        paused: true,
        currentTime: 0
      }, this.playTrack)
    }
  }

  componentDidUnMount(){
    this.pauseMusic()
  }

  spacePressed = (e) => {
    e.preventDefault()
    if (this.props.selectedSong && e.code === "Space") {
      const { paused } = this.state
      if (paused) {
        this.playTrack()
      } else {
        this.pauseTrack()
      }
    }
  }

  startTime = () => {
    this.setState(prevState => {
      return {
        currentTime: ++prevState.currentTime
      }
    })
  }

  stopTime = () => {
    clearInterval(this.interval)
  }

  playTrack = () => {
    this.interval = setInterval(this.startTime, 1000)
    this.setState({
      paused: false
    }, this.playMusic )
  }

  playMusic = () => {
    const { player } = this.state
    player.currentTime = this.state.currentTime

    player.play()
  }

  pauseTrack = () => {
    const { player } = this.state
    const time = player.currentTime
    this.stopTime()

    this.setState({
      paused: true,
      currentTime: time
    }, this.pauseMusic)
  }

  pauseMusic = () => {
    const { player } = this.state
    player.pause()
  }

  checkPause = () => {
    const { player } = this.state
    return player && player.paused
  }

  render(){
    return (
      <div className="music-player">
        <audio className="player" ref={this.myRef} src="" ></audio>
        <ButtonControls
          playTrack={this.playTrack}
          pauseTrack={this.pauseTrack}
          paused={this.state.paused}
          currentTime={this.state.player.currentTime}
          selectedSong={this.props.selectedSong}
          duration={this.state.player.duration}
          color={this.props.color} />
      </div>
    )
  }
}

export default MusicPlayer
