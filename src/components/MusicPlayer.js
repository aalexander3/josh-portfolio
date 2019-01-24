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
    this.myRef = React.createRef();
    // this.state = {
    //   playing: false
    // }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spacePressed)
  }

  componentDidUpdate(prevProps){
    const { current } = this.myRef
    current.src = musicMap[this.props.selectedSong]

    // current.play()
  }

  componentDidUnMount(){
    this.myRef.current.pause()
  }

  spacePressed = (e) => {
    if (e.code === "Space") {
      const { current } = this.myRef
      if (current.paused) {
        current.play()
      } else {
        current.pause()
      }
      // console.log('space hit');

    }
  }

  playTrack = () => {
    const { current } = this.myRef
    current.play()

    // this.setState({playing: true})
  }

  pauseTrack = () => {
    const { current } = this.myRef
    current.pause()

    // this.setState({playing: false})
  }

  checkPause = () => {
    return this.myRef.current && this.myRef.current.paused
  }
  
  render(){
    return (
      <div className="music-player">
        <audio className="player" ref={this.myRef} src="" ></audio>
        <ButtonControls
          playTrack={this.playTrack}
          pauseTrack={this.pauseTrack}
          checkPause={this.checkPause}
          selectedSong={this.props.selectedSong} />
      </div>
    )
  }
}

export default MusicPlayer
