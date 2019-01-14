import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import '../styles/App.css';

class App extends Component {
  state = {
    songList: [],
    selectedSong: '',
    playing: false
  }
  // state lives here
  // list of songs
  // selected song
  // playing - t/f

  render() {
    return (
      <div className="App">
        Hello world!
        <DisplayInfo />
        <MusicNav />
      </div>
    );
  }
}

export default App;
