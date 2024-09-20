import React from 'react'

const PokemonCards = ({searchData}) => {
  
  return (
    <div>
      <ul className='cards'>
        {
          searchData.map((currPokemon) => {
           return (
            <li key={currPokemon.id} className='pokemon-card'>
              <figure>
                <img
                  className='pokemon-image' 
                  src={currPokemon.sprites.other.dream_world.front_default} alt='pokemon-img' />
              </figure>
              <h1 className='pokemon-name'>{currPokemon.name}</h1>
              <div className='pokemon-info pokemon-highlight'>
                <p>
                  {
                    currPokemon.types.map((currType) => currType.type.name).join(', ')
                  }
                </p>
              </div>
            
              <div className='grid-three-cols'>
                <p className='pokemon-info'>
                  <span>Height:</span> {currPokemon.height}
                </p>
                <p className='pokemon-info'>
                  <span>Weight:</span> {currPokemon.weight}
                </p>
                <p className='pokemon-info'>
                  <span>Speed:</span> {currPokemon.stats[5].base_stat}
                </p>
              </div>

              <div className='grid-three-cols'>
                <div className='pokemon-info'>
                  <p>
                  {currPokemon.base_experience}
                  </p>
                  <span>Experience:</span>
                </div>
                <div className='pokemon-info'>
                  <p>
                  {currPokemon.stats[1].base_stat}
                  </p>
                  <span>Attack:</span>
                </div>
                <div className='pokemon-info'>
                <p>
                  {
                    currPokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0,1).join(',')
                  }
                </p>
                <span>Abilities:</span>
                </div>
              </div>
            </li>
           )
           
          })
        }
      </ul>
    </div>
  )
}

export default PokemonCards;