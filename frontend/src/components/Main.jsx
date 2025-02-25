import React from 'react'
import ItemList from './ItemList'
import {artistArray} from '../assets/database/artists.js' ///importa o array de objetos do arquivo artists.js
import {songsArray} from '../assets/database/songs.js' //importa o array de objetos do arquivo songs.js


export default function Main({type}) {
  return (
    <div className='main'>

        {/* ityem list  de artistas*/}
        {type === 'artists' || type === undefined ? 
        <ItemList title='Artistas populares' items = {10} 
        itensArray={artistArray} path="/artists" idPath="/artist"/> 
        :
        <></>}

        {/* ityem list  de musicas*/}
        {type === 'songs' || type === undefined ?
        <ItemList title='Músicas'  items = {25} 
        itensArray={songsArray} path="/songs" idPath="/song"/>
        :
        <></>}

    </div>
  )
}

//title = titulo da lista
//items = numero de itens a serem mostrados
//itensArray = array de objetos enviado para o componente ItemList
//path = rota da pagina
//idPath = rota da pagina com o id do item