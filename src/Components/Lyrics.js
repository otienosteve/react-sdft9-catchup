import React from 'react'
import { useParams } from 'react-router-dom'

function Lyrics({music}) {
    const {id} = useParams()
    const song = music.find(song=> song.id===id)
    console.log(song)
  return (
    <div>
        <h4>{song.name} Lyrics</h4>
       <p>
        {song.lyrics}
        
        </p> 



    </div>
  )
}

export default Lyrics