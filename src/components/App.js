import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import MusicPlayer from './MusicPlayer'
import '../styles/App.css';

class App extends Component {
  state = {
    songList: ['Skinned Knees', "Where'd You Go", "What We Call Love", "Noticed", "Make You Smile", "Sweet Cherie"],
    selectedSong: null,
    playing: false
  }
  // state lives here
  // list of songs
  // selected song
  // playing - t/f

  selectSong = (songTitle) => {
    this.setState({
      selectedSong: songTitle
    })
  }

  // renderPlayer = () => {
  //   const { selectedSong } = this.state
  //   return null
  // }

  render() {
    const { songList, selectedSong } = this.state
    return (
      <div className="App">
        <DisplayInfo />
        <MusicNav songList={songList} selectedSong={selectedSong} selectSong={this.selectSong} />
        <MusicPlayer selectedSong={selectedSong} />
      </div>
    );
  }
}

export default App;
