import { createSlice } from "@reduxjs/toolkit";
const randomSlice = createSlice({
  name: "random",
  initialState: {
    value: [0, 0, 0, 0],
  },
  reducers: {
    random: (state) => {
      state.value = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ];
    },
  },
});
export const { random } = randomSlice.actions;
export default randomSlice.reducer;
