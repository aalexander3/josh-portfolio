import React, { Component } from 'react'
import ButtonControls from './ButtonControls'
import ten from './../assets/music/10 10 10 (eP).wav'
import dope from './../assets/music/dope.wav'
import drake from './../assets/music/drake type beat.wav'
import e2z from './../assets/music/E 2 Z.wav'
import high from "./../assets/music/high again.wav"
import llm from "./../assets/music/lit like me.wav"
import ltu from "./../assets/music/love the ugly.wav"
import newAge from "./../assets/music/new age.wav"
import quick from "./../assets/music/quick.wav"
import sampled from "./../assets/music/sampled.wav"

import '../styles/musicPlayer.css'


const musicMap = {
  "dope": dope,
  'new age': newAge,
  'love the ugly': ltu,
  'lit like me': llm,
  'sampled': sampled,
  'quick': quick,
  '10 10 10 (eP)': ten,
  'E 2 Z': e2z,
  'high again': high,
  'drake type beat': drake
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
