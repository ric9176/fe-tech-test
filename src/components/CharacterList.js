import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// API endpoints:

// REST: https://rickandmortyapi.com/api/character
// Fetch docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// GraphQL: https://rickandmortyapi.com/graphql/
// https://www.apollographql.com/docs/react/v3.0-beta/get-started/

// Api docs: https://rickandmortyapi.com/documentation

// This is the list view, here we need to do several things:

// 1. Make a call to the api to get the first 10 charaters
// 2. Iterate over the charaters and display each one with its photo and some other attributes
// 3. Make each item a link in order to navigate to a character detail view.
// https://reacttraining.com/react-router/web/api/Link

const CharacterList = () => {
  const [charaters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(result => result.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }, [])

  if (!charaters.length) {
    return <p>...loading</p>
  }

  return (
    <>
      {charaters.map(character => (
        <Link to={`${character.id}`}>
          <img src={character.image}></img>
        </Link>
      ))}
    </>
  )
}

export default CharacterList
