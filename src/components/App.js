import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import MusicPlayer from './MusicPlayer'
import ArtNav from './ArtNav'
import MediaList from './MediaList'
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';

const colors = ['pink', 'orange', 'red', 'purple', 'indigo', 'cyan', 'green', 'yellow']
const songs = ['dope', "new age", "love the ugly", "lit like me", "sampled", "quick", "10 10 10 (eP)", "E 2 Z", "high again", "drake type beat"]
const artworks = ['feet-1.jpg', 'feet-2.jpg', 'foot-1.jpg', 'glowing.jpg', 'blue-glow.mp4', 'mirror-vid.mp4', 'mirror-1.jpg', 'mirror-2.jpg', 'glowing-plants.mp4', 'plants-2.jpg', 'plants.jpg', 'plant-vid.mp4']

class App extends Component {
  state = {
    songList: songs,
    selectedSong: null,
    artworks: artworks,
    color: 0,
    interval: 0
  }

  componentDidMount(){
    this.startColors()
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  selectSong = (songTitle) => {
    this.setState({
      selectedSong: songTitle
    })
  }

  startColors = () => {
    let interval = setInterval(() => {
      this.setState({color: this.nextColor(), interval})
    }, 4000)
  }

  nextColor = () => {
    if (this.state.color < colors.length - 1){
      return this.state.color + 1
    } else {
      return 0
    }
  }

  render() {
    const { songList, selectedSong, artworks, color } = this.state
    return (
      <div className={`App ${colors[this.state.color]}`}>
        <DisplayInfo />
        <Switch>
          <Route exact path='/' render={()=> {
              return <MusicNav songList={songList} selectedSong={selectedSong} selectSong={this.selectSong} />
            }}/>
          <Route exact path='/artwork' render={() => {
              return <ArtNav artworks={artworks} />
            }}/>
          <Route exact path='/media'
            render={() => <MediaList />}
            />
        </Switch>
        <MusicPlayer selectedSong={selectedSong} color={colors[color]} />
      </div>
    );
  }
}

export default App;
