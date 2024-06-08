import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: 10
    },
    reducers: {
        increment: (state) => {
            state.todo += 1;
        },
    }
});

export const { increment } = todoSlice.actions;