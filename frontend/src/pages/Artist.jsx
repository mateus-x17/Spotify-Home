import React from 'react'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/songList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

export default function Artist() {
  const { id } = useParams() // pega o id do artista na rota
  const artistObj = artistArray.filter((artist) => artist._id === id)[0] // procura o artista pelo id no array de artistas - converte para numero pois é armazenado com string no aquivo json
  const songsArrayFromArtist = songsArray.filter((song) => song.artist === artistObj.name) // procura as musicas do artista pelo nome do artista no array de musicas
  console.log(songsArrayFromArtist)

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)) // gera um id aleatorio para a musica dentro do array de musicas do artista
  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id // pega a musica aleatoria pelo index do array de musicas do artista
  console.log(randomIdFromArtist)

  return (
    <div className='artist'>
      <div className='artist__header'
      style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), 
        url(${artistObj.banner})`,} }>

        <h2 className='artist__title'>{artistObj.name}</h2>
      </div>

      <div className='artist__body'>
        <h2>populares</h2>
        <SongList  songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}><FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} /></Link>
      {/* play em uma musica aleatoria do artista */}
    </div>
  )
}
