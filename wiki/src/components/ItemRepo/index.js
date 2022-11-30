import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className='entrarRepo'>Ver Repositorio</a>
        <a href='#' rel="noreferrer" className='remover' onClick={handleRemove}>Remove</a>
    </ItemContainer>
  )
}

export default ItemRepo