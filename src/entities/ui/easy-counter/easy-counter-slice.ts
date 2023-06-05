import { createSlice } from '@reduxjs/toolkit';
import {IInitState} from "./easy-counter-types";
import type {PayloadAction} from '@reduxjs/toolkit';

export const initialState: IInitState = {
  count: 0
};

export const EasyCounterSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1
    },
    subCount: (state) => {
      state.count -= 1
    },
    resetCount: (state) => {
      state.count = 0
    }
  },
});

export const {addCount, subCount, resetCount} = EasyCounterSlice.actions;

export const EasyCounterSliceReducer = EasyCounterSlice.reducer;
