import React from 'react'
import MusicItem from './MusicItem'

function MusicList({music,voteForMusic}) {
  return (
    <div className='container-fluid'>
        <div class='row'>
        {music.map(song =>{
            return <MusicItem key={song.id }{...song} voteForMusic={voteForMusic}/>
        })}
        </div>
    </div>
  )
}

export default MusicList