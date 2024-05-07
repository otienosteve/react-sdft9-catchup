import React from 'react'

function Artists({music}) {
const artists = music.map(song => song.artist)
const uniqueArtists = [...new  Set(artists)]

  return (
    <div>
        <h3 className='text-center'>Artists </h3>
        {uniqueArtists.map(artist=> <h5>{artist}</h5>)}
        </div>
  )
}

export default Artists