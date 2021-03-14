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
          <input type="text" placeholder="Search" onChange={handleChange} />
          <ul>
            {pokemon
              .filter((item) =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
              )
              .map((pokemon) => (
                <li key={pokemon.id}>
                  <div>
                    <p>
                      <strong>{pokemon.title} </strong>
											{pokemon.desc}
                  	</p>
									 €{pokemon.price}
                  </div>
										<button onClick={() => dispatch(addPokemon(pokemon))}>
											Add to Cart
										</button>
                </li>
            	))}
          </ul>
        </main>
      </>
    )
};

export default Pokemon;