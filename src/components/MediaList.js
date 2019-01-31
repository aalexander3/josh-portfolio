import React from 'react'
import Media from './Media'

const mediaObjects = [
  { name: 'SoundCloud', url: 'https://soundcloud.com/josh-dykstra-649612891/'},
  { name: 'Instagram', url: 'https://www.instagram.com/j_did_/'}
]

const MediaList = () => {
  const contactMap = () => mediaObjects.map(media => <Media key={media.name} name={media.name} url={media.url} />)

  return (
    <div className='music-nav'>
      {contactMap()}
    </div>
  )
}

export default MediaList
