import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response)
        setPokemonList(response.data.results)})
  },[])

  return (
    <>
      {
        pokemonList.map((pokemon, index) => 
        (
          <p key={index}>{pokemon.name}</p>
        ))
      }
    </>
  )
}

export default App
