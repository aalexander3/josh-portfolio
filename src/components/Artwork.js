import React from 'react'

const Artwork = ({ artwork }) => {
  return (
    <div className='art-container'>
      <img className='artwork' src={require(`./../assets/images/${artwork}.png`)} alt={artwork} />
    </div>
  )
}

export default Artwork
