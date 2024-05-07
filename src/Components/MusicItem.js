import React from 'react'
import { useNavigate } from 'react-router-dom'

function MusicItem({voteForMusic,id, name, artist, genre, duration, lyrics,producer, rating, album, Image, vote}) {
 function handleClick(id){
    voteForMusic(id)
 }
 const navigate = useNavigate()
 
    return (
    <div className='col-md-3' style={{marginBottom:'3rem'}}>
    <div className="card" style={{width:'18rem'}}>
        <div className='image-container'>
  <img src={Image} className="card-img-top" alt="..." />
  </div>
  <div className="card-body">
    <h5 className="card-title">{name}</h5> <span className='badge bg-secondary'>{rating}</span>
    <p className="card-text">{lyrics.substring(1,50)} ...</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">album: {album}</li>
    <li className="list-group-item"> Artist: {artist}</li>
    <li className="list-group-item">Genre: {genre}</li>
    <li className="list-group-item">Duration: {duration}</li>
    <li className="list-group-item">Producer: {producer}</li>
    <li className="list-group-item"><span className='badge bg-warning'> Votes: {vote}</span></li>
  </ul>
  <div className="card-body">
    <button  className="btn btn-success" onClick={() => handleClick(id)}>Vote</button>
    <button className="btn btn-primary" onClick={() => navigate('/lyrics/'+id)}>View Lyrics</button>
  </div>
</div>
</div>
  )
}

export default MusicItem