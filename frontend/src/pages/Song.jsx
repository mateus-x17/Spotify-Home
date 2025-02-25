import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

export default function Song() {

  const { id } = useParams() //pega o id da musica na rota
  const songObj = songsArray.filter((currentSong) => currentSong._id === id)[0] // procura a musica pelo id no array de musicas que é o memso da rota - converte para numero pois é armazenado com string no aquivo json
  const artistObj = artistArray.filter((artist) => artist.name === songObj.artist)[0] // procura o artista pelo nome do artista no array de artistas

  const songsArrayFromArtist = songsArray.filter((currentSong) => currentSong.artist === artistObj.name) // filtra as musicas do artista do array de musicas
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)) // gera um numero aleatorio entre 0 e o tamanho do array de musicas do artista
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)) 
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id // pega o id da musica aleatoria
  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id

  return (
    <div className='song'>
      <div className='song__container'>

        <div className='song__image-container'>
          <img src={songObj.image} alt={`img da musica ${songObj.name}`} />
        </div>
      </div>

      <div className='song__bar'>

        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img 
          width={75}
          height={75}
          src={artistObj.image} 
          alt={`img do artista ${artistObj.name}`} />
        </Link>

        <Player duration={songObj.duration} randomIdFromArtist={randomIdFromArtist}
        randomId2FromArtist={randomIdFromArtist2} audio={songObj.audio}/>

        <div>
          <p className='song__name'>{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>

      </div>
      
    </div>
  )
}
