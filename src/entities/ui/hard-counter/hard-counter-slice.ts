import { createSlice } from '@reduxjs/toolkit';
import {IInitState} from "./hard-counter-types";
import type {PayloadAction} from '@reduxjs/toolkit';

export const initialState: IInitState = {
  hardCount: 0
};

export const HardCounterSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addHardCount: (state) => {
      state.hardCount += 1
    },
    subHardCount: (state) => {
      state.hardCount -= 1
    },
    resetHardCount: (state) => {
      state.hardCount = 0
    },
    addTen: (state) => {
      state.hardCount += 10
    },
    subTen: (state) => {
      state.hardCount -= 10
    },
    multipleByTwo: (state) => {
      state.hardCount = state.hardCount * 2
    },
    divideByTwo: (state) => {
      state.hardCount = state.hardCount / 2
    }
  }
});

export const {addHardCount, subHardCount, resetHardCount, addTen, subTen, multipleByTwo, divideByTwo} = HardCounterSlice.actions;

export const HardCounterSliceReducer = HardCounterSlice.reducer;
