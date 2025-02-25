import React from 'react'
import SingleItem from './SingleItem'
import {Link, useLocation} from 'react-router-dom'

export default function ItemList({title, items, itensArray, path, idPath}) {
    console.log(title)

    //veriifica se esta na home
    const {pathname} = useLocation()
    const isHome = pathname === '/'

    const finalItems = isHome ? items : Infinity //se estiver na home, mostra o numero de itens definido na props, caso contrario, mostra todos

  return (
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title}</h2>
                {isHome &&
                <Link className='item-list__link' to={path}> mostrar tudo</Link>}
                {/* exibe o link para mostrar todos os itens caso esteja na home */}
            </div>

            <div className='item-list__container'>
                {itensArray.filter((currentValue, index) => index < finalItems) //filtra o nrm de itens definindo na props
                .map((currentObj, index) => (
                    <SingleItem key={`${title}-${index}`} {...currentObj} idPath ={idPath}/> //para cada item filtrado no map, cria um componente SingleItem enviando as props atraves do spread operator do objeto
                ))}

        
            </div>
        </div>
  )
}
