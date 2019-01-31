import React from 'react'
import Artwork from './Artwork'
import '../styles/artNav.css'

const ArtNav = ({ artworks }) => {
  const artMap = () => {
    return artworks.map(artwork => <Artwork key={artwork} artwork={artwork} />)
  }

  return (
    <div className="art-nav">
      { artMap() }
    </div>
  )
}

export default ArtNav
