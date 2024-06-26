import { pokemonApi } from "../../../api/pokemonApi.js"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

//Thunk es una acción asyncrona que dispara otra acción
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}