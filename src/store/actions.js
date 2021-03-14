export const ADD_POKEMON = "ADD_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const REMOVE_POKEMON = "REMOVE_POKEMON";

export const searchPokemon = (keyword) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_POKEMON,
            payload: keyword,
        });
    };
};

export const addPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch({
            type: ADD_POKEMON,
            payload: pokemon,
        });
    };
};

export const removePokemon = (pokemonId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_POKEMON,
            payload: pokemonId,
        });
    };
};