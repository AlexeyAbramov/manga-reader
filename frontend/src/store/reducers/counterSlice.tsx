import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  count: number;
}

const initialState: IState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      if (state.count === 0) return;
      state.count -= 1;
    },
    byNumber(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

console.log({counterSlice});


const { actions, reducer } = counterSlice;

export const { increment, decrement, byNumber } = actions;

export default reducer;
