import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CHARACTER_QUERY = gql`
  query character($id: ID) {
    character(id: $id) {
      name
      image
    }
  }
`

const CharacterDetail = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CHARACTER_QUERY, {
    variables: { id }
  })

  if (loading) {
    return <p>...loading</p>
  }

  if (error) {
    console.log(error)
  }

  return (
    <>
      <h1>{data.character.name}</h1>
      <img src={data.character.image}></img>
    </>
  )
}

export default CharacterDetail
