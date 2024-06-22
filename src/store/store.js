import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(todosApi.middleware)
})