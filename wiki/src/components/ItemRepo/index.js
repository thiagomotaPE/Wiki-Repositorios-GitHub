import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>mota</h3>
        <p>blalblba</p>
        <a href='#' className='entrarRepo'>Ver Repositorio</a>
        <a href='#' className='remover'>Remove</a>
    </ItemContainer>
  )
}

export default ItemRepo