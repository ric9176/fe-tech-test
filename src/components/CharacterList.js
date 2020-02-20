import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CHARACTER_QUERY = gql`
  {
    characters {
      results {
        name
        image
        id
      }
    }
  }
`

const CharacterList = () => {
  const { loading, error, data } = useQuery(CHARACTER_QUERY)

  if (loading) {
    return <p>...loading</p>
  }

  if (error) {
    console.log(error)
  }

  return (
    <>
      {data.characters.results.map(character => (
        <Link to={`${character.id}`}>
          <img src={character.image}></img>
        </Link>
      ))}
    </>
  )
}

export default CharacterList
