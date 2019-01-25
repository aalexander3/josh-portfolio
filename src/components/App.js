import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import MusicPlayer from './MusicPlayer'
import '../styles/App.css';

const colors = ['pink', 'orange', 'red', 'purple', 'indigo', 'cyan', 'green', 'yellow']
const songs = ['Skinned Knees', "Where'd You Go", "What We Call Love", "Noticed", "Make You Smile", "Sweet Cherie"]

class App extends Component {
  state = {
    songList: songs,
    selectedSong: null,
    color: 0,
    interval: 0
  }

  componentDidUnMount(){
    clearInterval(this.state.interval)
  }

  selectSong = (songTitle) => {
    this.startColors()
    this.setState({
      selectedSong: songTitle
    })
  }

  startColors = () => {
    let interval = setInterval(() => {
      this.setState({color: this.nextColor()})
    }, 4000)
  }

  nextColor = () => {
    if (this.state.color < colors.length){
      return ++this.state.color
    } else {
      return 0
    }
  }

  render() {
    const { songList, selectedSong } = this.state
    return (
      <div className={`App ${colors[this.state.color]}`}>
        <DisplayInfo />
        <MusicNav songList={songList} selectedSong={selectedSong} selectSong={this.selectSong} />
        <MusicPlayer selectedSong={selectedSong} />
      </div>
    );
  }
}

export default App;
