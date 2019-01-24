import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import MusicPlayer from './MusicPlayer'
import '../styles/App.css';

class App extends Component {
  state = {
    songList: ['Skinned Knees', "Where'd You Go", "What We Call Love", "Noticed", "Make You Smile", "Sweet Cherie"],
    selectedSong: null,
  }

  selectSong = (songTitle) => {
    this.setState({
      selectedSong: songTitle
    })
  }

  render() {
    const { songList, selectedSong } = this.state
    return (
      <div className="App" >
        <DisplayInfo />
        <MusicNav songList={songList} selectedSong={selectedSong} selectSong={this.selectSong} />
        <MusicPlayer selectedSong={selectedSong} />
      </div>
    );
  }
}

export default App;
