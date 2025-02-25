import React from 'react'
import { Link } from 'react-router-dom'

export default function SongItens({_id, image, name, duration, artist, audio, index}) {
  return (
    <Link to={`/song/${_id}`} className='song-item'>

      <div className="song-item__number-album">
          <p>{index + 1}</p>

          <div className="song-item__album">
              <img className='song-item__image' src={image} alt= {`img da musica ${name}`} />
              <p className='song__name'>{name}</p>
          </div>
          
      </div>

      <p>{duration}</p>

    </Link>
  )
}
//id - é o id da musica
//image - é a imagem da musica
//name - é o nome da musica
//duration - é a duração da musica
//artist - é o nome do artista
//audio - é o link para o audio da musica
//index - é o identificador da musica no array (indice dela)
