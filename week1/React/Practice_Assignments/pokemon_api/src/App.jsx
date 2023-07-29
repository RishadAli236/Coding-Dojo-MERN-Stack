import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemonList(res.results) )
  }, [])

  return (
    <>
      {
        pokemonList.map((pokemon, index) =>
        (
          <p key = {index}>{pokemon.name}</p>
        ))
      }
    </>
  )
}

export default App
