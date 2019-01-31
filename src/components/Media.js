import React from 'react'

const Media = ({ name, url }) => {

  return (
    <div className='song-container'>
      <h1 className='song-title'><a className='media-link' href={url} target="_blank" rel="noopener noreferrer">{name}</a></h1>
    </div>
  )
}

export default Media
