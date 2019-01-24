import React, { Component } from 'react'
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
  }

  componentDidUpdate(prevProps){
    const { current } = this.myRef
    current.src = musicMap[this.props.selectedSong]
    current.play()
  }

  componentDidUnMount(){
    this.myRef.current.pause()
  }

  render(){
    return (
      <div className="music-player">
        <audio className="player" ref={this.myRef} src="" >
        </audio>
      </div>
    )
  }
}

export default MusicPlayer
