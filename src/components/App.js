import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import MusicNav from './MusicNav'
import MusicPlayer from './MusicPlayer'
import ArtNav from './ArtNav'
import MediaList from './MediaList'
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';

const colors = ['pink', 'orange', 'red', 'purple', 'indigo', 'cyan', 'green', 'yellow']
const songs = ['Skinned Knees', "Where'd You Go", "What We Call Love", "Noticed", "Make You Smile", "Sweet Cherie"]
const artworks = ['Arren Site', 'Forecast Detail', 'Forecast VR', 'Investr', 'Josh Site', 'VR Scene']

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
