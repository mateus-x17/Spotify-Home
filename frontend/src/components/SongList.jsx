import React from 'react'
import SongItens from './SongItens'
import {useState, useEffect} from 'react'

export default function songList({ songsArray }) {
  let [items, setItems] = useState(5) // quantidade de itens a serem exibidos inicialmente 

  
  return (

    <div className='song-list'>
      
      {songsArray.filter((currentValue, index)=>{
        return index < items // filtra os itens para exibir a quantidde da variavel items
      }).map((currentSongObj, index)=>{
        return <SongItens key={index} index={index} {...currentSongObj} />
      })}

      {songsArray.length > items ? (
        <p className='song-list__see-more' onClick={()=>{
          setItems(items + 5) // adiciona mais 5 itens a serem exibidos
          console.log(items)
        }}>ver mais</p>
      ) : null} 
      {/*se o array de musicas tiver mais itens do que a quantidade de itens a serem exibidos, exibe o botão "ver mais"*/}

    </div>
          
  )
}//{...currentSongObj} é o mesmo que fazer uma desestruturação do objeto. no componente SongItens, você pode acessar as propriedades do objeto currentSongObj usando a sintaxe {propName}.
