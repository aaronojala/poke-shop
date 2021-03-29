import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemon, searchPokemon } from '../store/actions';

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    const keyword = useSelector((state) => state.keyword);

    const handleChange = (e) => {
        let keyword = e.target.value;
        dispatch(searchPokemon(keyword));
    };

    return (
      <>
        <main className="pokemon">
					
          <ul>
          <input type="text" placeholder="Search" onChange={handleChange} />
            {pokemon
              .filter((item) =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
              )
              .map((pokemon) => (
								
                <li key={pokemon.id}>
                  
                    <p>
                      <h2>{pokemon.title}</h2>
                  	</p>
										<p>
											Element type: {pokemon.desc}
										</p>
										<p>
									 		€{pokemon.price}
										</p>
										<a href="/#">                
										<button class="btn btn-blue"onClick={() => dispatch(addPokemon(pokemon))}>
											Add to Cart
										</button>
										</a>  
                </li>
								
            	))}
          </ul>
					
        </main>
      </>
    )
};

export default Pokemon;