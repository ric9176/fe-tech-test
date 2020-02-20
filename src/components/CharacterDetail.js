import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// In this file we need to:

// 1. Display a detail view of a specific character given an ID, where could we get the ID from?
// 2. Make an Api call and display the result on the page

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(result => result.json())
      .then(data => setCharacter(data))
      .catch(error => console.log(error))
  }, [])

  if (!character.id) {
    return <p>...loading</p>
  }
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image}></img>
    </div>
  )
}

export default CharacterDetail
