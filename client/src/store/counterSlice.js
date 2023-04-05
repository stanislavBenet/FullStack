import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    step: 1
  },
  reducers: {
    //methods
    increment(state, action) {
      state.count+=state.step;
    },
    decrement(state, action) {
      state.count-=state.step;
    },
    setStep(state, action){
      const {value} = action.payload;
      state.step = Number(value);
    }
  },
});

export const { increment, decrement, setStep } = counterSlice.actions;
export default counterSlice.reducer;
