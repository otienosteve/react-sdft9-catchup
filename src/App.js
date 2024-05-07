import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MusicList from './Components/MusicList';
import { NavLink, Route, Routes } from 'react-router-dom';
import Lyrics from './Components/Lyrics';
import Artists from './Components/Artists';


function App() {
const [music, setMusic] = useState([])

useEffect(()=>{
fetch('http://localhost:4500/music').then(res=>res.json()).then(data =>{
setMusic(data)
})


},[])

function voteForMusic(id){
  const song = music.find(sng => sng.id===id)
  song.vote+=1
  fetch('http://localhost:4500/music/'+id, {method: `PATCH`,
  body: JSON.stringify(song),
  headers: { 'Content-type': `application/json; charset=UTF-8` },}).then(res=> res.json()).then(data =>{
    setMusic(prevState => [...prevState,data])
  })


}


  return (
    <>
     <h3 className='text-center'>
       Music APP
     </h3>
     < div className='navbar'>
  <NavLink to='/artists'> Artists </NavLink> 
  <NavLink> Genres </NavLink> 
  <NavLink> Albums </NavLink>
  </div>
     <Routes>
      <Route path='/' element={<MusicList music={music} voteForMusic={voteForMusic}/>} />
      <Route path='/lyrics/:id' element={<Lyrics music={music} />} />
      <Route path='/artists' element={<Artists  music={music} />}></Route>
     </Routes>
</>
  );
}

export default App;
