import { ADD_POKEMON, REMOVE_POKEMON, SEARCH_POKEMON } from './actions';

const initialState = {
    pokemon: [
        {
            id: "1",
            title: "Bulbasaur",
            desc: "Grass - Poison",
            price: "2.99"
        },
        {
            id: "2",
            title: "Ivysaur",
            desc: "Grass - Poison",
            price: "3.99"
        },
        {
            id: "3",
            title: "Venusaur",
            desc: "Grass - Poison",
            price: "4.99"
        },
        {
            id: "4",
            title: "Charmander",
            desc: "Fire",
            price: "2.99"
        },
        {
            id: "5",
            title: "Charmeleon",
            desc: "Fire",
            price: "3.99"
        },
        {
            id: "6",
            title: "Charizard",
            desc: "Fire",
            price: "4.99"
        },
        {
            id: "7",
            title: "Squirtle",
            desc: "Water",
            price: "2.99"
        },
        {
            id: "8",
            title: "Wartortle",
            desc: "Water",
            price: "3.99"
        },
        {
            id: "9",
            title: "Blastoise",
            desc: "Water",
            price: "2.99"
        },
    ],
    cart: [],
    keyword: "",
};

const shopReducer = (state = initialState, action) => {

    let updatedCart;
    let updatedItemIndex;
    switch (action.type) {
        case SEARCH_POKEMON:
            const keyword = action.payload;
            return { ...state, keyword: keyword};

        case ADD_POKEMON:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id);

            if(updatedItemIndex < 0){
                updatedCart.push({ ...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex],
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return { ...state, cart: updatedCart};

        case REMOVE_POKEMON:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload);

            const updatedItem = {
                ...updatedCart[updatedItemIndex],
            };
            updatedItem.quantity--;
            if(updatedItem.quantity <= 0){
                updatedCart.splice(updatedItemIndex, 1);
            } else {
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart};
        default:
            return state;
    }
};

export default shopReducer;