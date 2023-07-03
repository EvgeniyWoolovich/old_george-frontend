import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Dish = { id: number, count: number, categories: string, description: string, name: string, price: number, url: string }

type State = {
    dishes: Dish[];
}

const initState: State = {
    dishes: []
}

export const busketSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        addDish: (state, payload: PayloadAction<Dish>) => {
            state.dishes = [...state.dishes, payload.payload]
        },

        removeDish: (state, payload: PayloadAction<Dish>) => {
            state.dishes = state.dishes.filter((item) => item.id !== payload.payload.id)
        },

        increment: (state, payload: PayloadAction<number>) => {
            state.dishes = state.dishes.map((item) => {
                return item.id === payload.payload
                    ? ({ ...item, count: item.count + 1 })
                    : item;
            })
        },

        decrement: (state, payload: PayloadAction<number>) => {
            state.dishes = state.dishes.map((item) => {
                return item.id === payload.payload
                    ? ({ ...item, count: item.count - 1 })
                    : item;
            }).filter((item) => item.count !== 0)
        }
    }
})

export const { addDish, removeDish, increment, decrement } = busketSlice.actions;

export const busketReducer = busketSlice.reducer;

const self = (state: RootState) => state.busket;

export const busketSelector = createSelector(self, (state) => state);

export const busketItemSelector = (id: number) =>
    createSelector(
        [self],
        (busket) => busket.dishes.find((item) => item.id === id)
    );
